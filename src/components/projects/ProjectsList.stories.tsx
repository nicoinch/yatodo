import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import { Projects } from '../../generated';

export default {
  title: 'Projects list',
  component: ProjectsList,
};

const PROJECTS: Projects[] = [
  {
    id: 1,
    is_active: true,
    name: 'Project 1',
    color: 'cerise',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 2,
    is_active: false,
    name: 'Project 2',
    color: 'indigo',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 3,
    is_active: true,
    name: 'Project 3',
    color: 'coral',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 4,
    is_active: true,
    name: 'Project 4',
    color: 'lime',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 5,
    is_active: true,
    name: 'Project 5',
    color: 'indigo',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 6,
    is_active: true,
    name: 'Project 6',
    color: 'purple',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
  {
    id: 7,
    is_active: true,
    name: 'Project 7',
    color: 'gold',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
    tasks: [],
  },
];

export const AddProjects = () => {
  const [projects, setProjects] = useState(PROJECTS);

  const addProject = () => {
    console.log('add project');
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        is_active: true,
        name: 'Project ' + (projects.length + 1),
        color: ['teal', 'blue', 'indigo', 'purple', 'cerise', 'coral', 'ochre', 'gold', 'lime'][
          projects.length + (1 % 9)
        ],
        created_at: '2020-01-01T00:00:00Z',
        updated_at: '2020-01-01T00:00:00Z',
        tasks: [],
      },
    ]);
  };

  return (
    <div className="bg-teal-100 p-12">
      <ProjectsList projects={projects} />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addProject}
      >
        Add project
      </button>
    </div>
  );
};
