import React, { FC } from 'react';
import ProjectCard from './ProjectCard';
import { Projects } from './../../generated';

interface ProjectsListProps {
  dark?: boolean;
  projects?: Projects[];
}

const ProjectsList: FC<ProjectsListProps> = (props) => {
  return (
    <div className="grid gap-4 md:grid-cols-4 pb-6">
      {props.projects?.map((project) => (
        <ProjectCard key={project.id} title={project.name} color={project.color} />
      ))}
    </div>
  );
};

ProjectsList.defaultProps = {
  dark: false,
  projects: [],
};

export default ProjectsList;
