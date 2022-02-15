import React, { FC, ReactComponentElement } from 'react';
import { useAllProjectsSubscription, ProjectsFieldsFragment } from './../generated';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import ProjectsList from '../components/projects/ProjectsList';
import SectionTitle from '../components/sections/SectionTitle';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [result] = useAllProjectsSubscription();

  let header: ReactComponentElement<any>;
  let pageContent: ReactComponentElement<any>;

  if (!result.data) {
    header = <span>Loading data...</span>;
    pageContent = (
      <div className={'flex w-full h-full h-64 items-center justify-center'}>
        <Loader />
      </div>
    );
  } else {
    const activeProjectsCount = result.data.projects.filter((project) => project.is_active).length;
    const pendingTasksCount = result.data.projects
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
        <SectionTitle title={'Active projects'} />
        <ProjectsList projects={result.data.projects} />
      </div>
    );
  }

  return <Page header={header} className={'flex-grow self-center'} content={pageContent} />;
};

Home.defaultProps = {
  dark: false,
  color: 'teal',
};

export default Home;
