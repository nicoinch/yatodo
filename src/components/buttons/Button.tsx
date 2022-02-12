import React, { FC, ReactElement } from 'react';

interface ButtonProps {
  dark?: boolean;
  color?: string;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Force Tailwind to load classes for dark mode
 * bg-teal-400 hover:bg-teal-200 disabled:bg-teal-500 disabled:text-teal-700 active:border-teal-200 focus:border-teal-200 focus:outline-white
 * bg-blue-400 hover:bg-blue-200 disabled:bg-blue-500 disabled:text-blue-700 active:border-blue-200 focus:border-blue-200 focus:outline-white
 * bg-indigo-400 hover:bg-indigo-200 disabled:bg-indigo-500 disabled:text-indigo-700 active:border-indigo-200 focus:border-indigo-300 focus:outline-white
 * bg-purple-400 hover:bg-purple-200 disabled:bg-purple-500 disabled:text-purple-700 active:border-purple-200 focus:border-purple-300 focus:outline-white
 * bg-cerise-400 hover:bg-cerise-200 disabled:bg-cerise-500 disabled:text-cerise-700 active:border-cerise-200 focus:border-cerise-300 focus:outline-white
 * bg-coral-400 hover:bg-coral-200 disabled:bg-coral-500 disabled:text-coral-700 active:border-coral-200 focus:border-coral-300 focus:outline-white
 * bg-ochre-400 hover:bg-ochre-200 disabled:bg-ochre-500 disabled:text-ochre-700 active:border-ochre-200 focus:border-ochre-300 focus:outline-white
 * bg-gold-400 hover:bg-gold-200 disabled:bg-gold-500 disabled:text-gold-700 active:border-gold-200 focus:border-gold-300 focus:outline-white
 * bg-lime-400 hover:bg-lime-200 disabled:bg-lime-500 disabled:text-lime-700 active:border-lime-200 focus:border-lime-300 focus:outline-white
 * Force Tailwind to load classes for light mode
 * bg-teal-500 hover:bg-teal-700 disabled:bg-teal-300 disabled:text-teal-100 active:border-teal-500 focus:border-teal-600 focus:outline-black
 * bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:text-blue-100 active:border-blue-500 focus:border-blue-600 focus:outline-black
 * bg-indigo-500 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:text-indigo-100 active:border-indigo-500 focus:border-indigo-600 focus:outline-black
 * bg-purple-500 hover:bg-purple-700 disabled:bg-purple-300 disabled:text-purple-100 active:border-purple-500 focus:border-purple-600 focus:outline-black
 * bg-cerise-500 hover:bg-cerise-700 disabled:bg-cerise-300 disabled:text-cerise-100 active:border-cerise-500 focus:border-cerise-600 focus:outline-black
 * bg-coral-500 hover:bg-coral-700 disabled:bg-coral-300 disabled:text-coral-100 active:border-coral-500 focus:border-coral-600 focus:outline-black
 * bg-ochre-500 hover:bg-ochre-700 disabled:bg-ochre-300 disabled:text-ochre-100 active:border-ochre-500 focus:border-ochre-600 focus:outline-black
 * bg-gold-500 hover:bg-gold-700 disabled:bg-gold-300 disabled:text-gold-100 active:border-gold-500 focus:border-gold-600 focus:outline-black
 * bg-lime-500 hover:bg-lime-700 disabled:bg-lime-300 disabled:text-lime-100 active:border-lime-500 focus:border-lime-600 focus:outline-black
 */
const Button: FC<ButtonProps> = (props): ReactElement => {
  return (
    <button
      disabled={props.disabled}
      className={`
        ${props.className ? props.className : ''}
        font-sans 
        font-semibold 
        text-base 
        text-white 
        px-10 py-3
        rounded-lg
        disabled:cursor-not-allowed
        ${
          props.dark
            ? `bg-${props.color}-400
                hover:bg-${props.color}-200 
                disabled:bg-${props.color}-500 disabled:text-${props.color}-700
                active:border-${props.color}-200
                focus:border-${props.color}-200 focus:outline-white`
            : `bg-${props.color}-500 
                hover:bg-${props.color}-700 
                disabled:bg-${props.color}-300 disabled:text-${props.color}-100
                active:border-${props.color}-600
                focus:border-${props.color}-600 focus:outline-black`
        } 
      `}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  dark: false,
  color: 'teal',
  label: 'Ok',
  disabled: false,
};

export default Button;
