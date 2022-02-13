import React from 'react';
import Loader from './Loader';

export default {
  label: 'Loader',
  component: Loader,
};

export const Showcase = () => (
  <div className={'flex flex-col gap-4'}>
    <div className={'bg-gray-100 h-64'}>
      <div>Before</div>
      <Loader />
      <div>After</div>
    </div>
    <div className={'bg-gray-800 h-64'}>
      <div>Before</div>
      <Loader dark />
      <div>After</div>
    </div>
  </div>
);
