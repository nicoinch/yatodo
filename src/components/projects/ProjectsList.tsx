import React, { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProjectCard from './ProjectCard';
import { Projects } from './../../generated';

interface ProjectsListProps {
  dark?: boolean;
  projects?: Projects[];
}

const ProjectsList: FC<ProjectsListProps> = (props) => {
  return (
    <TransitionGroup
      className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 pb-6"
      component="div"
    >
      {props.projects?.map((project) => (
        <CSSTransition
          key={project.id}
          timeout={200}
          classNames={{
            enter: 'opacity-0 translate-y-4',
            enterActive: 'transition transition-all duration-200 opacity-100 translate-y-0',
            exit: 'opacity-100 translate-y-0',
            exitActive: 'transition transition-all duration-200 opacity-0 translate-y-4',
          }}
        >
          <ProjectCard title={project.name} color={project.color} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ProjectsList.defaultProps = {
  dark: false,
  projects: [],
};

export default ProjectsList;
