import { useMemo } from 'react';
import { Project } from '../types/project';

interface ProjectScore extends Project {
  matchedSkills: number;
  score: number;
}

export function useProjectSearch(projects: Project[], selectedSkills: string[]) {
  return useMemo(() => {
    if (selectedSkills.length === 0) return [];

    return projects
      .map((project) => {
        const matchedSkills = project.skills.filter((skill) =>
          selectedSkills.includes(skill)
        ).length;

        // Calculate score based on multiple factors
        const matchRatio = matchedSkills / project.skills.length;
        const skillCoverage = matchedSkills / selectedSkills.length;
        
        // Score formula considers both match ratio and skill coverage
        const score = (matchRatio + skillCoverage) / 2;

        return {
          ...project,
          matchedSkills,
          score,
        };
      })
      .filter((project) => project.matchedSkills > 0) // Only show projects with at least one matched skill
      .sort((a, b) => {
        // Sort by score first, then by difficulty level for equal scores
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        const difficultyOrder = {
          Beginner: 0,
          Intermediate: 1,
          Advanced: 2,
        };

        // For similar scores, prefer projects matching the user's likely skill level
        const avgMatchedSkills = selectedSkills.length / 2;
        const userLevel = avgMatchedSkills <= 2 ? 0 : avgMatchedSkills <= 4 ? 1 : 2;

        return (
          Math.abs(difficultyOrder[a.difficulty] - userLevel) -
          Math.abs(difficultyOrder[b.difficulty] - userLevel)
        );
      });
  }, [projects, selectedSkills]);
}