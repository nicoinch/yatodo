import React from 'react';
import SectionTitle from './SectionTitle';

export default {
  title: 'Components /  🧬  Section title',
  component: SectionTitle,
};

export const Showcase = () => {
  const handleOnButtonClick = () => {};

  return (
    <div>
      <div className="flex flex-col bg-gray-100 gap-4 p-4 w-1/2">
        <SectionTitle title="Section title" color={'teal'} />
        <SectionTitle title="Section title" color={'blue'} />
        <SectionTitle title="Section title" color={'indigo'} />
        <SectionTitle title="Section title" color={'purple'} />
        <SectionTitle title="Section title" color={'cerise'} />
        <SectionTitle title="Section title" color={'coral'} />
        <SectionTitle title="Section title" color={'ochre'} />
        <SectionTitle title="Section title" color={'gold'} />
        <SectionTitle title="Section title" color={'lime'} />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          buttonLabel={'Button label'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'teal'}
          buttonLabel={'Button teal'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'blue'}
          buttonLabel={'Button blue'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'indigo'}
          buttonLabel={'Button indigo'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'purple'}
          buttonLabel={'Button purple'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'cerise'}
          buttonLabel={'Button cerise'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'coral'}
          buttonLabel={'Button coral'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'ochre'}
          buttonLabel={'Button ochre'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'gold'}
          buttonLabel={'Button gold'}
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'lime'}
          buttonLabel={'Button lime'}
        />
      </div>
      <div className="flex flex-col bg-gray-800 gap-4 p-4 w-1/2">
        <SectionTitle title="Section title" color={'teal'} dark />
        <SectionTitle title="Section title" color={'blue'} dark />
        <SectionTitle title="Section title" color={'indigo'} dark />
        <SectionTitle title="Section title" color={'purple'} dark />
        <SectionTitle title="Section title" color={'cerise'} dark />
        <SectionTitle title="Section title" color={'coral'} dark />
        <SectionTitle title="Section title" color={'ochre'} dark />
        <SectionTitle title="Section title" color={'gold'} dark />
        <SectionTitle title="Section title" color={'lime'} dark />
        <SectionTitle title="Section title" color={'gray'} dark />
        <SectionTitle title="Section title" onButtonClick={handleOnButtonClick} dark />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'teal'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'blue'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'indigo'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'purple'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'cerise'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'coral'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'ochre'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'gold'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'lime'}
          dark
        />
        <SectionTitle
          title="Section title"
          onButtonClick={handleOnButtonClick}
          color={'gray'}
          dark
        />
      </div>
    </div>
  );
};
