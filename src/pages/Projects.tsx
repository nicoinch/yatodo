import React, { FC, ReactComponentElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAllProjectsSubscription } from './../generated';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import ProjectsList from '../components/projects/ProjectsList';
import SectionTitle from '../components/sections/SectionTitle';

interface ProjectsProps {
  dark?: boolean;
}

const Projects: FC<ProjectsProps> = (props) => {
  const navigate = useNavigate();
  const [result] = useAllProjectsSubscription();

  let header: ReactComponentElement<any>;
  let pageContent: ReactComponentElement<any> = <span />;

  const createProject = (): void => {
    navigate('/projects/new');
  };

  if (!result.data) {
    header = <span>Loading data...</span>;
    pageContent = (
      <div className={'flex w-full h-full h-64 items-center justify-center'}>
        <Loader dark={props.dark} />
      </div>
    );
  } else {
    const activeProjectsCount = result.data.projects.filter((project) => project.is_active).length;
    const doneProjectsCount = result.data.projects.length - activeProjectsCount;
    header = (
      <span>
        <strong>{activeProjectsCount} active projects</strong> with{' '}
        <strong>{doneProjectsCount} done projects</strong>
      </span>
    );
    pageContent = (
      <div className={'flex flex-col gap-4'}>
        <SectionTitle
          title={'All projects'}
          buttonLabel={'Add project'}
          onButtonClick={createProject}
          dark={props.dark}
        />
        <ProjectsList projects={result.data.projects} dark={props.dark} />
      </div>
    );
  }

  return (
    <div className={'flex flex-col flex-grow w-full absolute inset-0 z-20'}>
      <Page
        header={header}
        className={'flex-grow self-center items-center'}
        content={pageContent}
        dark={props.dark}
      />
      <Outlet />
    </div>
  );
};

Projects.defaultProps = {
  dark: false,
};

export default Projects;
