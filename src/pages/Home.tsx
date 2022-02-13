import React, { FC, ReactComponentElement } from 'react';
import { useAllProjectsSubscription } from './../generated';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import ProjectsList from '../components/projects/ProjectsList';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [result] = useAllProjectsSubscription();
  let pageContent: ReactComponentElement<any>;

  if (!result.data) {
    pageContent = (
      <div className={'flex w-full h-full items-center justify-center'}>
        <Loader />
      </div>
    );
  } else {
    // @ts-ignore
    pageContent = <ProjectsList projects={result.data.projects} />;
  }

  return <Page className={'flex-grow self-center'} content={pageContent} />;
};

Home.defaultProps = {
  dark: false,
  color: 'teal',
};

export default Home;
