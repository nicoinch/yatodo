import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import Button from '../buttons/Button';
import { ProjectsFieldsFragment, Tasks } from '../../generated';

export default {
  title: 'Projects list',
  component: ProjectsList,
};

const PROJECTS: ProjectsFieldsFragment[] = [
  {
    id: 1,
    is_active: true,
    name: 'Project 1',
    color: 'cerise',
    progress: {
      aggregate: {
        count: 3,
      },
    },
    progressTotal: {
      aggregate: {
        count: 4,
      },
    },
  },
  {
    id: 2,
    is_active: false,
    name: 'Project 2',
    color: 'indigo',
    progress: {
      aggregate: {
        count: 2,
      },
    },
    progressTotal: {
      aggregate: {
        count: 5,
      },
    },
  },
  {
    id: 3,
    is_active: true,
    name: 'Project 3',
    color: 'coral',
    progress: {
      aggregate: {
        count: 1,
      },
    },
    progressTotal: {
      aggregate: {
        count: 4,
      },
    },
  },
  {
    id: 4,
    is_active: true,
    name: 'Project 4',
    color: 'lime',
    progress: {
      aggregate: {
        count: 0,
      },
    },
    progressTotal: {
      aggregate: {
        count: 3,
      },
    },
  },
  {
    id: 5,
    is_active: true,
    name: 'Project 5',
    color: 'indigo',
    progress: {
      aggregate: {
        count: 0,
      },
    },
    progressTotal: {
      aggregate: {
        count: 0,
      },
    },
  },
  {
    id: 6,
    is_active: true,
    name: 'Project 6',
    color: 'purple',
    progress: {
      aggregate: {
        count: 3,
      },
    },
    progressTotal: {
      aggregate: {
        count: 4,
      },
    },
  },
  {
    id: 7,
    is_active: true,
    name: 'Project 7',
    color: 'gold',
    progress: {
      aggregate: {
        count: 3,
      },
    },
    progressTotal: {
      aggregate: {
        count: 4,
      },
    },
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
        color: ['teal', 'lime', 'blue', 'purple', 'indigo', 'cerise', 'ochre', 'coral', 'gold'][
          (projects.length + 1) % 9
        ],
        progress: {
          aggregate: {
            count: 3,
          },
        },
        progressTotal: {
          aggregate: {
            count: 4,
          },
        },
      },
    ]);
  };

  return (
    <div className="bg-teal-100 p-12">
      <ProjectsList projects={projects} />
      <Button label="Add project" onClick={addProject} />
    </div>
  );
};
