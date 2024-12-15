import React, { useState } from 'react';
import { Lightbulb, Search } from 'lucide-react';
import { SkillInput } from './components/SkillInput';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/Button';
import { projectDatabase } from './data/projects';
import { useProjectSearch } from './hooks/useProjectSearch';

function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const suggestedProjects = useProjectSearch(projectDatabase, selectedSkills);

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-10 h-10 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-900">Project Decider</h1>
          </div>
          <p className="text-xl text-gray-600">
            Find the perfect project based on your skills
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Your Skills</h2>
            <SkillInput
              selectedSkills={selectedSkills}
              onSkillsChange={setSelectedSkills}
            />
            { <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSearch}
                disabled={selectedSkills.length === 0}
                icon={Search}
              >
                Search Projects
              </Button>
            </div> }
          </div>
        </div>

        {isSearching && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
