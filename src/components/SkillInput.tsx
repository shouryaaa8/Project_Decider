import React from 'react';
import { X, Plus } from 'lucide-react';
import { allSkills } from '../data/projects';
import { Button } from './Button';

interface SkillInputProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
}

export function SkillInput({ selectedSkills, onSkillsChange }: SkillInputProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [showDropdown, setShowDropdown] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredSkills = allSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedSkills.includes(skill)
  );

  const handleSkillRemove = (skillToRemove: string) => {
    onSkillsChange(selectedSkills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillAdd = (skillToAdd: string) => {
    if (!selectedSkills.includes(skillToAdd)) {
      onSkillsChange([...selectedSkills, skillToAdd]);
      setInputValue('');
      setShowDropdown(false);
    }
  };

  const handleAddClick = () => {
    if (inputValue && filteredSkills.length > 0) {
      handleSkillAdd(filteredSkills[0]);
    }
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
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Type to search skills..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showDropdown && inputValue && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillAdd(skill)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          )}
        </div>
        <Button
          onClick={handleAddClick}
          disabled={!inputValue || filteredSkills.length === 0}
          icon={Plus}
        >
          Add
        </Button>
      </div>
    </div>
  );
}