import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Project card',
  component: ProjectCard,
};

export const Showcase = () => (
  <div>
    <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
      <ProjectCard title={'Project teal'} color={'teal'} />
      <ProjectCard title={'Project blue'} color={'blue'} />
      <ProjectCard title={'Project indigo'} color={'indigo'} />
      <ProjectCard title={'Project purple'} color={'purple'} />
      <ProjectCard title={'Project cerise'} color={'cerise'} />
      <ProjectCard title={'Project coral'} color={'coral'} />
      <ProjectCard title={'Project ochre'} color={'ochre'} />
      <ProjectCard title={'Project gold'} color={'gold'} />
      <ProjectCard title={'Project lime'} color={'lime'} />
    </div>
    <div className="grid bg-teal-900 gap-4 md:grid-cols-4 p-4">
      <ProjectCard title={'Project teal'} color={'teal'} dark />
      <ProjectCard title={'Project blue'} color={'blue'} dark />
      <ProjectCard title={'Project indigo'} color={'indigo'} dark />
      <ProjectCard title={'Project purple'} color={'purple'} dark />
      <ProjectCard title={'Project cerise'} color={'cerise'} dark />
      <ProjectCard title={'Project coral'} color={'coral'} dark />
      <ProjectCard title={'Project ochre'} color={'ochre'} dark />
      <ProjectCard title={'Project gold'} color={'gold'} dark />
      <ProjectCard title={'Project lime'} color={'lime'} dark />
    </div>
  </div>
);
