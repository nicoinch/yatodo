import React, { FC } from 'react';

interface ProjectCardProps {
  title?: string;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  return <div className="text-6xl text-teal-700">The cardProjectCard {props.title}</div>;
};

export default ProjectCard;
