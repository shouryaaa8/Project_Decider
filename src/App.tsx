import { useEffect, useState } from "react";
import { Lightbulb, Search } from "lucide-react";
import { SkillInput } from "./components/SkillInput";
import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/Button";
// import { projectDatabase } from "./data/projects";
// import { useProjectSearch } from "./hooks/useProjectSearch";
import { chatSession } from "./utils/GeminiAiModal";

function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skills, setSkills] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  interface Project {
    title: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    skills: string[];
    imageUrl?: string;
  }

  const [responseArray, setResponseArray] = useState<Project[]>([]);

  useEffect(() => {
   
    
    if (responseArray.length > 0) {
      console.log("Updated project ideas:", responseArray);
    }
  }, [responseArray]);
  useEffect(()=>{
    console.log(skills.length);
  })

  const handleSubmit = async () => {
    setIsSearching(true); 
  
    const prompt = `Generate a list of ${import.meta.env.VITE_PROJECT_COUNT} project ideas in JSON format, focusing on ${skills}-based projects. Each project should include the following properties:
        title: A concise title for the project.
        description: A brief description of what the project entails, highlighting the use of ${skills}.
        difficulty: One of 'Beginner', 'Intermediate', or 'Advanced' to categorize the project's complexity.
        skills: An array of technical skills required for the project, including '${skills}' as a mandatory skill.`;
        console.log(prompt);
        
  
    try {
      const result = await chatSession.sendMessage(prompt);
      const textResponse = await result.response.text();
      console.log(textResponse);
      
      const cleanedJson = textResponse
        .replace("```json", "")
        .replace("```", "");
  
      const parsedResponse = JSON.parse(cleanedJson); 
      console.log(parsedResponse);
      
  

      const updatedProjects = await Promise.all(
        parsedResponse.map(async (project: Project) => {
          try {
            const form = new FormData();
            form.append("prompt", `${project.title}: ${project.description}`);
  
            const imageResponse = await fetch(
              "https://clipdrop-api.co/text-to-image/v1",
              {
                method: "POST",
                headers: {
                  "x-api-key": import.meta.env.VITE_CLIPDROP_API_KEY, 
                },
                body: form,
              }
            );
            console.log(imageResponse);
            
  
            if (!imageResponse.ok) {
              throw new Error("Failed to fetch image from ClipDrop");
            }
  
            const buffer = await imageResponse.arrayBuffer();
            const imageUrl = URL.createObjectURL(new Blob([buffer])); 
  
         
            return { ...project, imageUrl };
          } catch (error) {
            console.error("Error generating image:", error);
            return { ...project, imageUrl: "" }; 
          }
        })
      );
  
      setResponseArray(updatedProjects); 
    } catch (error) {
      console.error("Error fetching project ideas:", error);
    } finally {
      setIsSearching(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-10 h-10 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Project Decider
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Find the perfect project based on your skills
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Search Your Skills</h2>
            <SkillInput
              selectedSkills={selectedSkills}
              onSkillsChange={setSelectedSkills}
              setSkills={setSkills}
              
            />
            {
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleSubmit}
                  disabled={skills.length === 0}
                  icon={Search}
                >
                  Search Projects
                </Button>
              </div>
            }
          </div>
        </div>

        {isSearching && (
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-700">Generating projects from AI...</p>
          </div>
        )}

        {responseArray.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responseArray.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                difficulty={project.difficulty}
                skills={project.skills}
                imageUrl={project.imageUrl || ""}
                matchedSkills={0}
                score={0}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
