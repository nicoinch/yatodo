import React, { FC, ReactComponentElement } from 'react';
import {
  useAllTasksSubscription,
  TasksFieldsFragment,
  useUpdateTasksMutation,
} from './../generated';
import Loader from '../components/loader/Loader';
import Page from '../components/pages/Page';
import TasksList from '../components/tasks/TasksList';
import SectionTitle from '../components/sections/SectionTitle';

interface TasksProps {
  dark?: boolean;
}

const Tasks: FC<TasksProps> = (props) => {
  const [result] = useAllTasksSubscription();
  const [, updateTasks] = useUpdateTasksMutation();

  let header: ReactComponentElement<any>;
  let pageContent: ReactComponentElement<any> = <span />;

  const toggleTask = (task: TasksFieldsFragment): void => {
    updateTasks({
      id: task.id,
      isDone: !task.is_done,
    });
  };

  if (!result.data) {
    header = <span>Loading data...</span>;
    pageContent = (
      <div className={'flex w-full h-64 items-center justify-center'}>
        <Loader dark={props.dark} />
      </div>
    );
  } else {
    const activeTasksCount = result.data.tasks.filter((task) => !task.is_done).length;
    const doneTasksCount = result.data.tasks.length - activeTasksCount;
    header = (
      <span>
        <strong>{activeTasksCount} pending tasks</strong> &&nbsp;
        <strong>{doneTasksCount} done tasks</strong>
      </span>
    );
    pageContent = (
      <div className={'flex flex-col gap-4'}>
        <SectionTitle title={'All tasks'} dark={props.dark} />
        <TasksList tasks={result.data.tasks} onTaskClick={toggleTask} dark={props.dark} />
      </div>
    );
  }

  return (
    <div className={'flex flex-col flex-grow w-full absolute inset-0 z-20'}>
      <Page
        header={header}
        className={'flex-grow self-center'}
        content={pageContent}
        dark={props.dark}
      />
    </div>
  );
};

Tasks.defaultProps = {
  dark: false,
};

export default Tasks;
