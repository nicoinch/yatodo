import React, { useState } from 'react';
import TasksList from './TasksList';
import Button from '../buttons/Button';
import { TasksFieldsFragment, Tasks } from '../../generated';

export default {
  title: 'Tasks list',
  component: TasksList,
};

const TASKS: TasksFieldsFragment[] = [
  {
    id: 1,
    is_done: false,
    content: 'Task 1',
    long_description: 'Task long description 1',
    project: {
      name: 'Project 1',
      color: 'coral',
    },
  },
  {
    id: 2,
    is_done: false,
    content: 'Task 2',
    long_description: 'Task long description 2',
    project: {
      name: 'Project 1',
      color: 'indigo',
    },
  },
];

export const AddTasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const addTask = () => {
    console.log('add project');
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        is_done: false,
        content: 'Task ' + (tasks.length + 1),
        long_description: 'Task long description' + (tasks.length + 1),
        project: {
          name: 'Project 1',
          color: 'blue',
        },
      },
    ]);
  };

  return (
    <div className="bg-teal-100 p-12">
      <TasksList tasks={tasks} />
      <Button label="Add task" onClick={addTask} />
    </div>
  );
};
