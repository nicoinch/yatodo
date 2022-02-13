import React, { FC } from 'react';
import { theme } from '../../tailwind.config';

interface LoaderProps {
  dark?: boolean;
  color?: string;
}

/**
 * Force Tailwind to load classes
 * bg-teal-400 bg-teal-600
 * bg-blue-400 bg-blue-600
 * bg-indigo-400 bg-indigo-600
 * bg-purple-400 bg-purple-600
 * bg-cerise-400 bg-cerise-600
 * bg-coral-400 bg-coral-600
 * bg-ochre-400 bg-ochre-600
 * bg-gold-400 bg-gold-600
 * bg-lime-400 bg-lime-600
 * bg-gray-400 bg-gray-600
 */
const Loader: FC<LoaderProps> = (props) => {
  if (!props.color) {
    props.color = 'teil';
  }

  const smokePointsNumber = 3;
  const colors = theme.extend.colors[props.color];
  const color = colors ? colors[props.dark ? '400' : '500'] : undefined;

  return (
    <div className={'animate-bounce py-4'}>
      <div className={'w-10 relative ml-12 rotate-315'}>
        {Array(smokePointsNumber)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={'absolute top-1/2 w-full h-full'}
              style={{
                transform: `translate(-${i * (32 / smokePointsNumber) + 6}px, -4px)`,
              }}
            >
              <span
                className={`absolute inset-x-2 w-2 h-2 rounded-full ${
                  props.dark ? `bg-${props.color}-400` : `bg-${props.color}-500`
                } opacity-50`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `500ms`,
                  transform: `scale(${0.5 + i * 0.3})`,
                }}
              />
              <span
                className={`animate-ping absolute inset-x-2 w-2 h-2 rounded-full ${
                  props.dark ? `bg-${props.color}-400` : `bg-${props.color}-500`
                }`}
                style={{
                  animationDelay: `${i * 100 + 500}ms`,
                  transform: `scale(${0.5 + i * 0.3})`,
                }}
              />
            </span>
          ))}
        <div>
          <svg width="100%" height="100%" viewBox="0 0 32 32">
            <g transform="matrix(0.0410104,0.0410104,-0.0410104,0.0410104,6.73494,-15.496)">
              <path
                fill={color}
                d="M315.947,301.227L376.32,240.853L430.293,230.187C498.987,136.747 630.4,90.027 677.973,90.027C677.973,137.6 631.253,269.013 537.813,337.707L527.147,391.68L466.773,452.053L451.627,376.747C421.547,376.747 421.547,376.747 406.4,361.6C391.253,346.453 391.253,346.453 391.253,316.373L315.947,301.227M533.333,202.667C515.779,202.667 501.333,217.112 501.333,234.667C501.333,252.221 515.779,266.667 533.333,266.667C550.888,266.667 565.333,252.221 565.333,234.667C565.333,217.112 550.888,202.667 533.333,202.667Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  dark: false,
  color: 'teal',
};

export default Loader;
