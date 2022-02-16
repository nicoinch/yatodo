import React from 'react';
import Page from './Page';
import SectionTitle from '../sections/SectionTitle';

export default {
  title: 'Components/ 🧬 Page',
  component: Page,
};

export const Showcase = () => {
  const header = (
    <span>
      Header with <strong>Bold text</strong>
    </span>
  );
  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'bg-white h-64'}>
        <Page
          header={header}
          content={<SectionTitle title={'This is a page content'} onButtonClick={() => {}} />}
        />
      </div>
      <div className={'bg-white h-64'}>
        <Page
          header={header}
          color={'indigo'}
          content={
            <SectionTitle
              title={'This is a page content'}
              color={'indigo'}
              onButtonClick={() => {}}
            />
          }
        />
      </div>
      <div className={'bg-black h-64'}>
        <Page
          header={header}
          dark
          content={<SectionTitle dark title={'This is a page content'} onButtonClick={() => {}} />}
        />
      </div>
      <div className={'bg-black h-64'}>
        <Page
          header={header}
          dark
          color={'indigo'}
          content={
            <SectionTitle
              title={'This is a page content'}
              dark
              color={'indigo'}
              onButtonClick={() => {}}
            />
          }
        />
      </div>
    </div>
  );
};
