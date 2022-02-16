import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProjectCard from './ProjectCard';
import { ProjectsFieldsFragment } from './../../generated';

interface ProjectsListProps {
  dark?: boolean;
  projects?: Array<ProjectsFieldsFragment>;
}

const ProjectsList: FC<ProjectsListProps> = (props) => {
  const navigate = useNavigate();
  const handleCardClick = (projectId: number) => {
    return () => {
      navigate('/projects/' + projectId);
    };
  };
  return (
    <TransitionGroup className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4" component="div">
      {props.projects?.map((project) => (
        <CSSTransition
          key={project.id}
          timeout={300}
          classNames={{
            enterActive: 'transition transition-all duration-200 opacity-100 scale-105 ease-in',
            exit: 'opacity-100',
            exitActive: 'transition transition-all duration-200 opacity-0 scale-95 ease-out',
          }}
        >
          <ProjectCard
            className="hover:cursor-pointer"
            title={project.name}
            color={project.color}
            done={!project.is_active}
            progress={project.progress.aggregate?.count}
            progressTotal={project.progressTotal.aggregate?.count}
            onClick={handleCardClick(project.id)}
            dark={props.dark}
          />
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
