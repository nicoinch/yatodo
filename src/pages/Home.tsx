import React, { FC, ReactComponentElement } from 'react';
import {
  useActiveProjectsSubscription,
  usePendingTasksSubscription,
  ProjectsFieldsFragment,
  TasksFieldsFragment,
  useUpdateTasksMutation,
} from './../generated';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import ProjectsList from '../components/projects/ProjectsList';
import SectionTitle from '../components/sections/SectionTitle';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import TasksList from '../components/tasks/TasksList';

interface HomeProps {
  dark?: boolean;
}

const Home: FC<HomeProps> = (props) => {
  const navigate = useNavigate();
  const [resultProjects] = useActiveProjectsSubscription();
  const [resultTasks] = usePendingTasksSubscription();
  const [, updateTasks] = useUpdateTasksMutation();

  let header: ReactComponentElement<any>;
  let pageContent: ReactComponentElement<any>;

  const toggleTask = (task: TasksFieldsFragment): void => {
    updateTasks({
      id: task.id,
      isDone: !task.is_done,
    });
  };
  const createProject = (): void => {
    navigate('/projects/new');
  };

  if (!resultProjects.data || !resultTasks.data) {
    header = <span>Loading data...</span>;
    pageContent = (
      <div className={'flex w-full h-full h-64 items-center justify-center'}>
        <Loader dark={props.dark} />
      </div>
    );
  } else {
    const activeProjectsCount = resultProjects.data.projects.filter(
      (project) => project.is_active,
    ).length;
    const pendingTasksCount = resultProjects.data.projects
      .filter((project: ProjectsFieldsFragment) => project.is_active)
      .reduce(
        (pendingTasksTotal, { progress, progressTotal }) =>
          pendingTasksTotal +
          (progressTotal?.aggregate?.count ?? 0 - (progress?.aggregate?.count ?? 0)),
        0,
      );
    header = (
      <span>
        <strong>{activeProjectsCount} active projects</strong> with{' '}
        <strong>{pendingTasksCount} pending tasks</strong>
      </span>
    );
    pageContent = (
      <div className={'flex flex-col gap-4'}>
        <SectionTitle
          title={'Suggested active projects'}
          buttonLabel={'Create a project'}
          onButtonClick={createProject}
          dark={props.dark}
        />
        <ProjectsList projects={resultProjects.data.projects} dark={props.dark} />
        <Link to="/projects">
          <span
            className={`underline ${
              props.dark ? `text-teal-400 hover:text-teal-200` : `text-teal-600 hover:text-teal-800`
            }`}
          >
            View all projects &gt;
          </span>
        </Link>
        <SectionTitle title={'Suggested pending tasks'} dark={props.dark} />
        <TasksList tasks={resultTasks.data.tasks} onTaskClick={toggleTask} dark={props.dark} />
        <Link to="/tasks">
          <span
            className={`underline ${
              props.dark ? `text-teal-400 hover:text-teal-200` : `text-teal-600 hover:text-teal-800`
            }`}
          >
            View all tasks &gt;
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className={'flex flex-col flex-grow w-full relative'}>
      <Page
        header={header}
        className={'flex-grow self-center'}
        content={pageContent}
        dark={props.dark}
      />
      <Outlet />
    </div>
  );
};

Home.defaultProps = {
  dark: false,
};

export default Home;
