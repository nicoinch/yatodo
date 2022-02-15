import React, { FC, ReactElement, useState } from 'react';
import Check from '../check/Check';

interface TaskItemProps {
  dark?: boolean;
  color?: string;
  done?: boolean;
  title?: string;
  text?: string;
  info?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Force Tailwind to load classes:
 * text-teal-200 text-teal-700
 * text-blue-200 text-blue-700
 * text-indigo-200 text-indigo-700
 * text-purple-200 text-purple-700
 * text-cerise-200 text-cerise-700
 * text-coral-200 text-coral-700
 * text-ochre-200 text-ochre-700
 * text-gold-200 text-gold-700
 * text-lime-200 text-lime-700
 */
const TaskItem: FC<TaskItemProps> = (props): ReactElement => {
  const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    if (!props.done) {
      setAnimate(true);
    }
    props.onClick ? props.onClick() : null;
  };

  return (
    <div
      className={`
          font-sans 
          ${props.className ? props.className : ''}
          ${
            props.dark
              ? props.done
                ? `bg-gray-900 text-gray-200 italic`
                : `bg-gray-900 text-${props.color}-200`
              : props.done
              ? `bg-white text-gray-700 italic`
              : `bg-white text-${props.color}-700`
          } rounded-xl w-full overflow-hidden relative p-3`}
      onClick={handleClick}
    >
      {props.done && <div className="absolute inset-0 opacity-25 bg-gray-200 z-10" />}
      <div className={'flex gap-3 h-full items-start'}>
        <Check
          className={'flex-shrink-0 relative z-20'}
          color={props.color}
          dark={props.dark}
          done={props.done}
          animate={animate}
        />
        <div className={'flex flex-col'}>
          {props.title && <div className={'font-bold text-base'}>{props.title}</div>}
          {props.text && <div className={'font-light text-sm flex-grow'}>{props.text}</div>}
          {props.info && <div className={'font-semibold text-xs mt-1'}>{props.info}</div>}
        </div>
      </div>
    </div>
  );
};

TaskItem.defaultProps = {
  dark: false,
  color: 'teal',
  done: false,
};

export default TaskItem;
