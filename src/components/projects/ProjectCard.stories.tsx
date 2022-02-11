import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Project card',
  component: ProjectCard,
};

export const Basic = () => <ProjectCard />;
export const Second = () => <ProjectCard title="My second tag" />;
