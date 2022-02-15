import React, { FC, ReactComponentElement } from 'react';
import {
  useUpdateTasksMutation,
  useProjectDetailsSubscription,
  TasksFieldsFragment,
} from './../generated';
import { useParams } from 'react-router-dom';
import Button from '../components/buttons/Button';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import SectionTitle from '../components/sections/SectionTitle';
import TasksList from '../components/tasks/TasksList';

const Project = () => {
  const params = useParams();
  const [, updateTasks] = useUpdateTasksMutation();

  let color = 'teal';
  let header: ReactComponentElement<any> = <span />;
  let pageContent: ReactComponentElement<any> = <span />;

  const addTask = (): void => {
    console.log('add task');
  };
  const toggleTask = (task: TasksFieldsFragment): void => {
    updateTasks({
      id: task.id,
      isDone: !task.is_done,
    });
  };

  if (params.projectId && !isNaN(parseInt(params.projectId))) {
    const projectId = parseInt(params.projectId);
    const [result] = useProjectDetailsSubscription({
      variables: {
        projectId,
      },
    });

    if (!result.data) {
      header = <span>Loading data...</span>;
      pageContent = (
        <div className={'flex w-full h-full h-64 items-center justify-center'}>
          <Loader />
        </div>
      );
    } else {
      const project = result.data.projects[0];
      color = project.color;
      header = (
        <span>
          <strong>{project.pendingTasks.length} pending tasks</strong> and{' '}
          <strong>{project.doneTasks.length} done tasks</strong>
        </span>
      );
      pageContent = (
        <div className={'flex flex-col gap-4 w-full h-full items-center justify-center'}>
          <SectionTitle
            title={project.name}
            buttonLabel={'Add task'}
            onButtonClick={addTask}
            color={project.color}
          />
          <TasksList
            project={project}
            tasks={project.pendingTasks}
            emptyState={'No active task for project'}
            onTaskClick={toggleTask}
          />
          <Button label={'Archive project'} color={color} outlined onClick={addTask}>
            Add task
          </Button>
          <TasksList
            project={project}
            tasks={project.doneTasks}
            emptyState={'No pending task for project'}
            onTaskClick={toggleTask}
          />
        </div>
      );
    }
  } else {
    header = <span>An invalid project ID was provided, no project can be loaded</span>;
    pageContent = <div />;
  }

  return (
    <Page color={color} header={header} className={'flex-grow self-center'} content={pageContent} />
  );
};

Project.defaultProps = {
  dark: false,
  color: 'teal',
};

export default Project;
