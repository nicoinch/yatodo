import React, { FC, ReactComponentElement, useState } from 'react';
import {
  useUpdateProjectsMutation,
  useUpdateTasksMutation,
  useProjectDetailsSubscription,
  TasksFieldsFragment,
} from './../generated';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Button from '../components/buttons/Button';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import SectionTitle from '../components/sections/SectionTitle';
import TasksList from '../components/tasks/TasksList';

interface ProjectProps {
  dark?: boolean;
}

const Project: FC<ProjectProps> = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [, updateProjects] = useUpdateProjectsMutation();
  const [, updateTasks] = useUpdateTasksMutation();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  let color = 'teal';
  let header: ReactComponentElement<any> = <span />;
  let pageContent: ReactComponentElement<any> = <span />;

  if (params.projectId && !isNaN(parseInt(params.projectId))) {
    const projectId = parseInt(params.projectId);

    const addTask = (): void => {
      navigate(`/projects/${projectId}/newTask`);
    };
    const archiveProject = (): void => {
      setButtonDisabled(true);
      updateProjects({
        id: projectId,
        isActive: false,
      }).then(() => {
        setButtonDisabled(false);
      });
    };
    const activateProject = (): void => {
      setButtonDisabled(true);
      updateProjects({
        id: projectId,
        isActive: true,
      });
      setButtonDisabled(false);
    };
    const toggleTask = (task: TasksFieldsFragment): void => {
      updateTasks({
        id: task.id,
        isDone: !task.is_done,
      });
    };

    const [result] = useProjectDetailsSubscription({
      variables: {
        projectId,
      },
    });

    if (!result.data) {
      header = <span>Loading data...</span>;
      pageContent = (
        <div className={'flex w-full h-full h-64 items-center justify-center'}>
          <Loader dark={props.dark} />
        </div>
      );
    } else {
      const project = result.data.projects[0];
      color = project.is_active ? project.color : 'gray';
      header = (
        <span>
          <strong>{project.pendingTasks.length} pending tasks</strong> and{' '}
          <strong>{project.doneTasks.length} done tasks</strong>
        </span>
      );
      pageContent = (
        <div className={'flex flex-col gap-4 w-full h-full items-center justify-stretch'}>
          <SectionTitle
            title={project.name}
            buttonLabel={'Add task'}
            onButtonClick={project.is_active ? addTask : undefined}
            color={color}
            dark={props.dark}
          />
          <TasksList
            className={`w-full ${project.is_active ? '' : 'pointer-events-none'}`}
            tasks={project.pendingTasks}
            project={project}
            emptyState={'No active task for project'}
            onTaskClick={toggleTask}
            color={color}
            dark={props.dark}
          />
          {project.is_active && (
            <Button
              label={'Archive project'}
              color={color}
              outlined
              onClick={archiveProject}
              disabled={buttonDisabled}
              dark={props.dark}
            />
          )}{' '}
          {!project.is_active && (
            <Button
              label={'Reactivate project'}
              color={project.color}
              onClick={activateProject}
              disabled={buttonDisabled}
              dark={props.dark}
            />
          )}
          <TasksList
            className={`w-full ${project.is_active ? '' : 'pointer-events-none'}`}
            tasks={project.doneTasks}
            project={project}
            emptyState={'No pending task for project'}
            onTaskClick={toggleTask}
            color={color}
            dark={props.dark}
          />
        </div>
      );
    }
  } else {
    header = <span>An invalid project ID was provided, no project can be loaded</span>;
    pageContent = <div />;
  }

  return (
    <div className={'flex flex-col flex-grow w-full absolute inset-0 z-30'}>
      <Page
        header={header}
        className={'flex-grow self-center'}
        content={pageContent}
        color={color}
        dark={props.dark}
      />
      <Outlet />
    </div>
  );
};

Project.defaultProps = {
  dark: false,
};

export default Project;
