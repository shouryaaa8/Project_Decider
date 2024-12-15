import React from 'react';
import { X } from 'lucide-react';

interface SkillInputProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
  setSkills: (skills: string) => void;

}

export function SkillInput({ selectedSkills, onSkillsChange,setSkills }: SkillInputProps) {
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

 

  const handleSkillRemove = (skillToRemove: string) => {
    onSkillsChange(selectedSkills.filter((skill) => skill !== skillToRemove));
  };

  

  

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap gap-2">
        {selectedSkills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {skill}
            <button
              onClick={() => handleSkillRemove(skill)}
              className="hover:text-blue-600"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSkills(e.target.value);
              
            }}
            placeholder="Type to search skills..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>
        {/* <Button
          onClick={handleAddClick}
          disabled={!inputValue || filteredSkills.length === 0}
          icon={Plus}
        >
          Add
        </Button> */}
      </div>
    </div>
  );
}