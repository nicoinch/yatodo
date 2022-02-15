import React, { FC, ReactElement } from 'react';

interface ButtonProps {
  dark?: boolean;
  outlined?: boolean;
  color?: string;
  label?: string;
  small?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Force Tailwind to load classes for dark mode
 * text-teal-900 bg-teal-400 hover:bg-teal-200 active:border-teal-200 focus:border-teal-200 focus:outline-white
 * text-blue-900 bg-blue-400 hover:bg-blue-200 active:border-blue-200 focus:border-blue-200 focus:outline-white
 * text-indigo-900 bg-indigo-400 hover:bg-indigo-200 active:border-indigo-200 focus:border-indigo-300 focus:outline-white
 * text-purple-900 bg-purple-400 hover:bg-purple-200 active:border-purple-200 focus:border-purple-300 focus:outline-white
 * text-cerise-900 bg-cerise-400 hover:bg-cerise-200 active:border-cerise-200 focus:border-cerise-300 focus:outline-white
 * text-coral-900 bg-coral-400 hover:bg-coral-200 active:border-coral-200 focus:border-coral-300 focus:outline-white
 * text-ochre-900 bg-ochre-400 hover:bg-ochre-200 active:border-ochre-200 focus:border-ochre-300 focus:outline-white
 * text-gold-900 bg-gold-400 hover:bg-gold-200 active:border-gold-200 focus:border-gold-300 focus:outline-white
 * text-lime-900 bg-lime-400 hover:bg-lime-200 active:border-lime-200 focus:border-lime-300 focus:outline-white
 * text-gray-900 bg-gray-400 hover:bg-gray-200 active:border-gray-200 focus:border-gray-300 focus:outline-white
 * Force Tailwind to load classes for dark mode outlined
 * text-teal-300 border-teal-300 bg-teal-700 hover:bg-teal-900
 * text-blue-300 border-blue-300 bg-blue-700 hover:bg-blue-900
 * text-indigo-300 border-indigo-300 bg-indigo-700 hover:bg-indigo-900
 * text-purple-300 border-purple-300 bg-purple-700 hover:bg-purple-900
 * text-cerise-300 border-cerise-300 bg-cerise-700 hover:bg-cerise-900
 * text-coral-300 border-coral-300 bg-coral-700 hover:bg-coral-900
 * text-ochre-300 border-ochre-300 bg-ochre-700 hover:bg-ochre-900
 * text-gold-300 border-gold-300 bg-gold-700 hover:bg-gold-900
 * text-lime-300 border-lime-300 bg-lime-700 hover:bg-lime-900
 * text-gray-300 border-gray-300 bg-gray-700 hover:bg-gray-900
 * Force Tailwind to load classes for light mode
 * bg-teal-500 hover:bg-teal-700 active:border-teal-500 focus:border-teal-600 focus:outline-black
 * bg-blue-500 hover:bg-blue-700 active:border-blue-500 focus:border-blue-600 focus:outline-black
 * bg-indigo-500 hover:bg-indigo-700 active:border-indigo-500 focus:border-indigo-600 focus:outline-black
 * bg-purple-500 hover:bg-purple-700 active:border-purple-500 focus:border-purple-600 focus:outline-black
 * bg-cerise-500 hover:bg-cerise-700 active:border-cerise-500 focus:border-cerise-600 focus:outline-black
 * bg-coral-500 hover:bg-coral-700 active:border-coral-500 focus:border-coral-600 focus:outline-black
 * bg-ochre-500 hover:bg-ochre-700 active:border-ochre-500 focus:border-ochre-600 focus:outline-black
 * bg-gold-500 hover:bg-gold-700 active:border-gold-500 focus:border-gold-600 focus:outline-black
 * bg-lime-500 hover:bg-lime-700 active:border-lime-500 focus:border-lime-600 focus:outline-black
 * bg-gray-500 hover:bg-gray-700 active:border-gray-500 focus:border-gray-600 focus:outline-black
 * Force Tailwind to load classes for light mode outlined
 * bg-teal-500 border-teal-600 hover:bg-teal-200
 * bg-blue-500 border-blue-600 hover:bg-blue-200
 * bg-indigo-500 border-indigo-600 hover:bg-indigo-200
 * bg-purple-500 border-purple-600 hover:bg-purple-200
 * bg-cerise-500 border-cerise-600 hover:bg-cerise-200
 * bg-coral-500 border-coral-600 hover:bg-coral-200
 * bg-ochre-500 border-ochre-600 hover:bg-ochre-200
 * bg-gold-500 border-gold-600 hover:bg-gold-200
 * bg-lime-500 border-lime-600 hover:bg-lime-200
 * bg-gray-500 border-gray-600 hover:bg-gray-200
 */
const Button: FC<ButtonProps> = (props): ReactElement => {
  return (
    <button
      disabled={props.disabled}
      className={`
        ${props.className ? props.className : ''}
        font-sans 
        font-semibold 
        ${props.small ? 'text-sm px-5 py-2' : 'text-base px-10 py-3'}
        rounded-lg
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${
          props.dark
            ? props.outlined
              ? `border
                bg-gray-900
                text-${props.color}-300
                border-${props.color}-300
                hover:bg-${props.color}-900 
                active:border-3
                focus:border-3`
              : `text-${props.color}-900
                bg-${props.color}-400
                hover:bg-${props.color}-200 
                active:border-${props.color}-200
                focus:border-${props.color}-200 focus:outline-white`
            : props.outlined
            ? `border
                bg-white
                text-${props.color}-600
                border-${props.color}-600
                hover:bg-${props.color}-200
                active:border-3
                focus:border-3`
            : `text-white
                bg-${props.color}-500
                hover:bg-${props.color}-700
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
  outlined: false,
  color: 'teal',
  label: 'Ok',
  small: false,
  disabled: false,
};

export default Button;
