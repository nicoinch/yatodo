import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Components / 🧬  Project card',
  component: ProjectCard,
};

export const Showcase = () => (
  <div>
    <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
      <ProjectCard title={'Project teal'} color={'teal'} />
      <ProjectCard title={'Project teal'} color={'teal'} done />
      <ProjectCard title={'Project blue'} color={'blue'} />
      <ProjectCard title={'Project blue'} color={'blue'} done />
      <ProjectCard title={'Project indigo'} color={'indigo'} />
      <ProjectCard title={'Project indigo'} color={'indigo'} done />
      <ProjectCard title={'Project purple'} color={'purple'} />
      <ProjectCard title={'Project purple'} color={'purple'} done />
      <ProjectCard title={'Project cerise'} color={'cerise'} />
      <ProjectCard title={'Project cerise'} color={'cerise'} done />
      <ProjectCard title={'Project coral'} color={'coral'} />
      <ProjectCard title={'Project coral'} color={'coral'} done />
      <ProjectCard title={'Project ochre'} color={'ochre'} />
      <ProjectCard title={'Project ochre'} color={'ochre'} done />
      <ProjectCard title={'Project gold'} color={'gold'} />
      <ProjectCard title={'Project gold'} color={'gold'} done />
      <ProjectCard title={'Project lime'} color={'lime'} />
      <ProjectCard title={'Project lime'} color={'lime'} done />
    </div>
    <div className="grid bg-teal-800 gap-4 md:grid-cols-4 p-4">
      <ProjectCard title={'Project teal'} color={'teal'} dark />
      <ProjectCard title={'Project teal'} color={'teal'} dark done />
      <ProjectCard title={'Project blue'} color={'blue'} dark />
      <ProjectCard title={'Project blue'} color={'blue'} dark done />
      <ProjectCard title={'Project indigo'} color={'indigo'} dark />
      <ProjectCard title={'Project indigo'} color={'indigo'} dark done />
      <ProjectCard title={'Project purple'} color={'purple'} dark />
      <ProjectCard title={'Project purple'} color={'purple'} dark done />
      <ProjectCard title={'Project cerise'} color={'cerise'} dark />
      <ProjectCard title={'Project cerise'} color={'cerise'} dark done />
      <ProjectCard title={'Project coral'} color={'coral'} dark />
      <ProjectCard title={'Project coral'} color={'coral'} dark done />
      <ProjectCard title={'Project ochre'} color={'ochre'} dark />
      <ProjectCard title={'Project ochre'} color={'ochre'} dark done />
      <ProjectCard title={'Project gold'} color={'gold'} dark />
      <ProjectCard title={'Project gold'} color={'gold'} dark done />
      <ProjectCard title={'Project lime'} color={'lime'} dark />
      <ProjectCard title={'Project lime'} color={'lime'} dark done />
    </div>
  </div>
);
