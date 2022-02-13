import React, { FC } from 'react';
import ProjectCardProgress from './ProjectCardProgress';

interface ProjectCardProps {
  dark?: boolean;
  title?: string;
  color?: string;
  progress?: number;
  progressTotal?: number;
  done?: boolean;
}

/**
 * Force Tailwind to load classes:
 * bg-teal-100 bg-teal-200 bg-teal-700 text-teal-200 text-teal-700
 * bg-blue-100 bg-blue-200 bg-blue-700 text-blue-200 text-blue-700
 * bg-indigo-100 bg-indigo-200 bg-indigo-700 text-indigo-200 text-indigo-700
 * bg-purple-100 bg-purple-200 bg-purple-700 text-purple-200 text-purple-700
 * bg-cerise-100 bg-cerise-200 bg-cerise-700 text-cerise-200 text-cerise-700
 * bg-coral-100 bg-coral-200 bg-coral-700 text-coral-200 text-coral-700
 * bg-ochre-100 bg-ochre-200 bg-ochre-700 text-ochre-200 text-ochre-700
 * bg-gold-100 bg-gold-200 bg-gold-700 text-gold-200 text-gold-700
 * bg-lime-100 bg-lime-200 bg-lime-700 text-lime-200 text-lime-700
 */
const ProjectCard: FC<ProjectCardProps> = (props) => {
  return (
    <div
      className={`font-sans 
          ${
            props.dark
              ? props.done
                ? `bg-gray-900 text-gray-200 italic`
                : `bg-gray-900 text-${props.color}-200`
              : props.done
              ? `bg-white text-gray-700 italic`
              : `bg-white text-${props.color}-700`
          } rounded-xl w-full grid overflow-hidden relative`}
    >
      {props.done && <div className="absolute inset-0 opacity-50 bg-gray-200 z-10" />}
      <div className="p-3 pb-0">
        <div className={`font-bold text-sm pb-6`}>{props.title}</div>
        <div className="flex w-full">
          <div className="flex-grow">
            <span className={`font-bold text-sm`}>
              {props.progress}/{props.progressTotal}
            </span>
            <span className={`text-xs`}>&nbsp;tasks done</span>
          </div>
          <div
            className={`text-xs not-italic z-20 p-1 mb-1 rounded ${
              props.done ? 'visible' : 'invisible'
            } ${
              props.dark
                ? `bg-${props.color}-200 text-gray-500`
                : `bg-${props.color}-700 text-gray-100`
            }`}
          >
            DONE
          </div>
        </div>
      </div>
      <ProjectCardProgress
        dark={props.dark}
        color={props.color}
        progress={props.progress}
        progressTotal={props.progressTotal}
        done={props.done}
      />
    </div>
  );
};

ProjectCard.defaultProps = {
  dark: false,
  title: '',
  color: 'teal',
  progress: 1,
  progressTotal: 2,
  done: false,
};

export default ProjectCard;
