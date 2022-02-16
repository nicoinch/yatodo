import React, { FC, ReactElement } from 'react';

interface ProjectCardProgressProps {
  dark?: boolean;
  color?: string;
  progress?: number;
  progressTotal?: number;
  done?: boolean;
}

/*
 * Force Tailwind to load classes:
 * bg-teal-200 bg-teal-700
 * bg-blue-200 bg-blue-700
 * bg-indigo-200 bg-indigo-700
 * bg-purple-200 bg-purple-700
 * bg-cerise-200 bg-cerise-700
 * bg-coral-200 bg-coral-700
 * bg-ochre-200 bg-ochre-700
 * bg-gold-200 bg-gold-700
 * bg-lime-200 bg-lime-700
 */
const ProjectCardProgress: FC<ProjectCardProgressProps> = ({
  dark,
  color,
  progressTotal = 1,
  progress = 0,
  done,
}): ReactElement => {
  return (
    <div
      className={`h-1 w-full font-light relative ${dark ? `bg-gray-600` : `bg-gray-200`}
        `}
    >
      <div
        className={`h-1 absolute ${
          dark
            ? done
              ? 'bg-gray-200'
              : `bg-${color}-200`
            : done
            ? 'bg-gray-700'
            : `bg-${color}-700`
        }`}
        style={{
          width: `${
            progressTotal !== 0 ? Math.floor((progress / progressTotal) * 100) + '%' : '0%'
          }`,
        }}
      />
    </div>
  );
};

ProjectCardProgress.defaultProps = {
  dark: false,
  color: 'teal',
  progress: 1,
  progressTotal: 2,
  done: false,
};

export default ProjectCardProgress;
