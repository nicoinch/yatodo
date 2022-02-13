import React from 'react';
import TaskItem from './TaskItem';

export default {
  title: 'Task item',
  component: TaskItem,
};

export const Showcase = () => (
  <div>
    <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
      <TaskItem
        title={'Task teal'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project teal'}
        color={'teal'}
      />
      <TaskItem
        title={'Task teal'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project teal'}
        color={'teal'}
        done
      />
      <TaskItem
        title={'Task blue'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project blue'}
        color={'blue'}
      />
      <TaskItem
        title={'Task blue'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project blue'}
        color={'blue'}
        done
      />
      <TaskItem
        title={'Task indigo'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project indigo'}
        color={'indigo'}
      />
      <TaskItem
        title={'Task indigo'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project indigo'}
        color={'indigo'}
        done
      />
      <TaskItem
        title={'Task purple'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project purple'}
        color={'purple'}
      />
      <TaskItem
        title={'Task purple'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project purple'}
        color={'purple'}
        done
      />
      <TaskItem
        title={'Task cerise'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project cerise'}
        color={'cerise'}
      />
      <TaskItem
        title={'Task cerise'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project cerise'}
        color={'cerise'}
        done
      />
      <TaskItem
        title={'Task coral'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project coral'}
        color={'coral'}
      />
      <TaskItem
        title={'Task coral'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project coral'}
        color={'coral'}
        done
      />
      <TaskItem
        title={'Task ochre'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project ochre'}
        color={'ochre'}
      />
      <TaskItem
        title={'Task ochre'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project ochre'}
        color={'ochre'}
        done
      />
      <TaskItem
        title={'Task gold'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project gold'}
        color={'gold'}
      />
      <TaskItem
        title={'Task gold'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project gold'}
        color={'gold'}
        done
      />
      <TaskItem
        title={'Task lime'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project lime'}
        color={'lime'}
      />
      <TaskItem
        title={'Task lime'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project lime'}
        color={'lime'}
        done
      />
    </div>
    <div className="grid bg-teal-800 gap-4 md:grid-cols-4 p-4">
      <TaskItem
        title={'Task teal'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project teal'}
        color={'teal'}
        dark
      />
      <TaskItem
        title={'Task teal'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project teal'}
        color={'teal'}
        done
        dark
      />
      <TaskItem
        title={'Task blue'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project blue'}
        color={'blue'}
        dark
      />
      <TaskItem
        title={'Task blue'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project blue'}
        color={'blue'}
        done
        dark
      />
      <TaskItem
        title={'Task indigo'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project indigo'}
        color={'indigo'}
        dark
      />
      <TaskItem
        title={'Task indigo'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project indigo'}
        color={'indigo'}
        done
        dark
      />
      <TaskItem
        title={'Task purple'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project purple'}
        color={'purple'}
        dark
      />
      <TaskItem
        title={'Task purple'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project purple'}
        color={'purple'}
        done
        dark
      />
      <TaskItem
        title={'Task cerise'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project cerise'}
        color={'cerise'}
        dark
      />
      <TaskItem
        title={'Task cerise'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project cerise'}
        color={'cerise'}
        done
        dark
      />
      <TaskItem
        title={'Task coral'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project coral'}
        color={'coral'}
        dark
      />
      <TaskItem
        title={'Task coral'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project coral'}
        color={'coral'}
        done
        dark
      />
      <TaskItem
        title={'Task ochre'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project ochre'}
        color={'ochre'}
        dark
      />
      <TaskItem
        title={'Task ochre'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project ochre'}
        color={'ochre'}
        done
        dark
      />
      <TaskItem
        title={'Task gold'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project gold'}
        color={'gold'}
        dark
      />
      <TaskItem
        title={'Task gold'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project gold'}
        color={'gold'}
        done
        dark
      />
      <TaskItem
        title={'Task lime'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project lime'}
        color={'lime'}
        dark
      />
      <TaskItem
        title={'Task lime'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        info={'Project lime'}
        color={'lime'}
        done
        dark
      />
    </div>
  </div>
);
