import React, { FC, ReactElement, useState } from 'react';
import { theme } from '../../../tailwind.config';
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

  return (
    <div className={`${props.className ? props.className : ''} self-start w-10 h-10 ver`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={
          {
            'clip-rule': 'evenodd',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-miterlimit': 1.5,
          } as React.CSSProperties
        }
      >
        <g transform="matrix(0.966611,0,0,0.967111,0.566396,0.551205)">
          <circle
            className={'stroke-1'}
            cx="16"
            cy="16"
            r="16"
            style={{
              fill: props.done
                ? props.dark
                  ? theme.extend.colors[props.color]!['300']
                  : theme.extend.colors[props.color]!['600']
                : 'none',
              stroke: props.done
                ? 'none'
                : props.dark
                ? theme.extend.colors[props.color]!['200']
                : theme.extend.colors[props.color]!['700'],
            }}
          />
        </g>
        {(props.done || props.animate) && (
          <path
            className={`${props.animate ? 'animate-check' : ''} stroke-4`}
            d="M7,14.628L15,22.485L26,12"
            stroke-dasharray={27}
            stroke-dashoffset={props.done ? 0 : 27}
            style={
              {
                fill: 'none',
                stroke: props.done
                  ? props.dark
                    ? theme.extend.colors['gray']['500']
                    : theme.extend.colors['gray']['100']
                  : props.dark
                  ? theme.extend.colors[props.color]!['200']
                  : theme.extend.colors[props.color]!['700'],
                'stroke-linejoin': 'miter',
              } as React.CSSProperties
            }
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
