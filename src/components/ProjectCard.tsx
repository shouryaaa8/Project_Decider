import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  difficulty: string;
  skills: string[];
  imageUrl: string;
  matchedSkills: number;
  score: number;
}

export function ProjectCard({
  title,
  description,
  difficulty,
  skills,
  imageUrl,
  matchedSkills,
  score,
}: ProjectCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
              difficulty
            )}`}
          >
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Matched Skills: {matchedSkills}/{skills.length}
              </span>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{
                    width: `${(matchedSkills / skills.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            {/* <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Match Score: {Math.round(score * 100)}%
              </span>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${score * 100}%`,
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}