import React, { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from './TaskItem';
import { ProjectDetailsFieldsFragment, TasksFieldsFragment } from './../../generated';

interface TasksListProps {
  dark?: boolean;
  color?: string;
  project?: ProjectDetailsFieldsFragment;
  tasks?: Array<TasksFieldsFragment>;
  emptyState?: string;
  onTaskClick?: (task: TasksFieldsFragment) => void;
  className?: string;
}

/*
 * Force Tailwind to load classes:
 * text-teal-400 text-teal-600
 * text-blue-400 text-blue-600
 * text-indigo-400 text-indigo-600
 * text-purple-400 text-purple-600
 * text-cerise-400 text-cerise-600
 * text-coral-400 text-coral-600
 * text-ochre-400 text-ochre-600
 * text-gold-400 text-gold-600
 * text-lime-400 text-lime-600
 * text-gray-400 text-lime-600
 */
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
      <div className={`${props.dark ? `text-${props.color}-400` : `text-${props.color}-600`}`}>
        {props.emptyState}
      </div>
    );
  }

  return (
    <TransitionGroup
      className={`
        ${props.className ? props.className : ''}
        grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2`}
      component="div"
    >
      {props.tasks?.map((task) => (
        <CSSTransition
          key={task.id}
          timeout={200}
          classNames={{
            enter: 'opacity-0',
            enterActive: 'transition transition-all duration-200 opacity-100 scale-105 ease-in',
            exit: 'opacity-100',
            exitActive: 'transition transition-all duration-200 opacity-0 scale-95 ease-out',
          }}
        >
          <TaskItem
            className="hover:cursor-pointer"
            title={task.content}
            text={task.long_description}
            info={task.project.name}
            color={props.color ?? task.project.color}
            done={task.is_done}
            onClick={handleItemClick(task)}
            dark={props.dark}
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
