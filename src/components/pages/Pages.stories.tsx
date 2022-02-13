import React from 'react';
import Page from './Page';
import SectionTitle from '../sections/SectionTitle';

export default {
  label: 'Page',
  component: Page,
};

export const Showcase = () => (
  <div className={'flex flex-col gap-4'}>
    <div className={'bg-white h-64'}>
      <Page content={<SectionTitle title={'This is a page content'} onButtonClick={() => {}} />} />
    </div>
    <div className={'bg-white h-64'}>
      <Page
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
        dark
        content={<SectionTitle dark title={'This is a page content'} onButtonClick={() => {}} />}
      />
    </div>
    <div className={'bg-black h-64'}>
      <Page
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
