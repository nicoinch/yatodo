import React, { FC, ReactElement } from 'react';

interface ProjectCardProgressProps {
  dark?: boolean;
  color?: string;
  progress?: number;
  progressTotal?: number;
}

/**
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
const ProjectCardProgress: FC<ProjectCardProgressProps> = (props): ReactElement => {
  let progress: ReactElement = <span />;
  if (props.progress && props.progressTotal) {
    progress = (
      <div
        className={`h-1 w-full font-light relative ${
          props.dark ? `bg-${props.color}-700` : `bg-${props.color}-200`
        }
        }`}
      >
        <div
          className={`h-2 absolute ${
            props.dark ? `bg-${props.color}-200` : `bg-${props.color}-700`
          }`}
          style={{
            width: `${(props?.progress / props?.progressTotal) * 100}%`,
          }}
        />
      </div>
    );
  }
  return progress;
};

ProjectCardProgress.defaultProps = {
  dark: false,
  color: 'teal',
  progress: 1,
  progressTotal: 2,
};

export default ProjectCardProgress;
