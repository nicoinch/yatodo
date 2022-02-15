import React, { FC, ReactElement } from 'react';
import { theme } from '../../tailwind.config';
import './Check.css';

interface CheckProps {
  dark?: boolean;
  color?: string;
  animate?: boolean;
  done?: boolean;
  className?: string;
}

const Check: FC<CheckProps> = (props): ReactElement => {
  if (!props.color) {
    props.color = 'teil';
  }

  const colors = theme.extend.colors[props.color];
  const fillColor = colors ? colors[props.dark ? '300' : '600'] : undefined;
  const strokeColor = colors ? colors[props.dark ? '200' : '700'] : undefined;

  const svgStyle: React.CSSProperties = {
    clipRule: 'evenodd',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.5,
  };
  const pathStyle: React.CSSProperties = {
    fill: 'none',
    stroke: props.done
      ? props.dark
        ? theme.extend.colors['gray']['500']
        : theme.extend.colors['gray']['100']
      : strokeColor,
    strokeLinejoin: 'miter',
  };

  return (
    <div className={`${props.className ? props.className : ''} self-start w-10 h-10 ver`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
      >
        <g transform="matrix(0.966611,0,0,0.967111,0.566396,0.551205)">
          <circle
            className={'stroke-1'}
            cx="16"
            cy="16"
            r="16"
            style={{
              fill: props.done ? fillColor : 'none',
              stroke: props.done ? 'none' : strokeColor,
            }}
          />
        </g>
        {(props.done || props.animate) && (
          <path
            className={`${props.animate ? 'animate-check' : ''} stroke-4`}
            d="M7,14.628L15,22.485L26,12"
            strokeDasharray={27}
            strokeDashoffset={props.done ? 0 : 27}
            style={pathStyle}
          />
        )}
      </svg>
    </div>
  );
};

Check.defaultProps = {
  dark: false,
  color: 'teal',
  animate: false,
  done: false,
};

export default Check;
