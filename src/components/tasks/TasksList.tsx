import React, { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from './TaskItem';
import { ProjectDetailsFieldsFragment, TasksFieldsFragment } from './../../generated';

interface TasksListProps {
  dark?: boolean;
  project?: ProjectDetailsFieldsFragment;
  tasks?: Array<TasksFieldsFragment>;
  emptyState?: string;
  onTaskClick?: (task: TasksFieldsFragment) => void;
}

const TasksList: FC<TasksListProps> = (props) => {
  const handleItemClick = (task: TasksFieldsFragment) => {
    return () => {
      if (props.onTaskClick) {
        props.onTaskClick(task);
      }
    };
  };

  if (!props.tasks || props.tasks.length === 0) {
    return (
      <div
        className={`${
          props.dark ? `text-${props.project?.color}-700` : `text-${props.project?.color}-600`
        }`}
      >
        {props.emptyState}
      </div>
    );
  }

  return (
    <TransitionGroup className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2" component="div">
      {props.tasks?.map((task) => (
        <CSSTransition
          key={task.id}
          timeout={200}
          classNames={{
            enter: 'opacity-0 translate-y-4',
            enterActive: 'transition transition-all duration-200 opacity-100 translate-y-0',
            exit: 'opacity-100 translate-y-0',
            exitActive: 'transition transition-all duration-200 opacity-0 translate-y-4',
          }}
        >
          <TaskItem
            className="hover:cursor-pointer"
            title={task.content}
            text={task.long_description}
            color={props.project?.color}
            done={task.is_done}
            onClick={handleItemClick(task)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

TasksList.defaultProps = {
  dark: false,
  tasks: [],
  emptyState: 'No tasks',
};

export default TasksList;
