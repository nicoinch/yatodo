import React from 'react';
import SectionTitle from './SectionTitle';

export default {
  title: 'Section title',
  component: SectionTitle,
};

export const Showcase = () => {
  const handleOnButtonClick = () => {};

  return (
    <div>
      <div className="flex flex-col bg-gray-100 gap-4 p-4 w-1/2">
        <SectionTitle title="Section title" />
        <SectionTitle title="Section title" onButtonClick={handleOnButtonClick} />
      </div>
      <div className="flex flex-col bg-gray-800 gap-4 p-4 w-1/2">
        <SectionTitle title="Section title" dark />
        <SectionTitle title="Section title" dark onButtonClick={handleOnButtonClick} />
      </div>
    </div>
  );
};
