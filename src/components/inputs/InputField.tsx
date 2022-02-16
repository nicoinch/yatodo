import React, { FC, InputHTMLAttributes, ReactElement } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  dark?: boolean;
  color?: string;
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/*
 * Force Tailwind to load classes
 * text-teal-400 bg-teal-900 border-teal-400 placeholder-teal-500
 * text-blue-400 bg-blue-900 border-blue-400 placeholder-blue-500
 * text-indigo-400 bg-indigo-900 border-indigo-400 placeholder-indigo-500
 * text-purple-400 bg-purple-900 border-purple-400 placeholder-purple-500
 * text-cerise-400 bg-cerise-900 border-cerise-400 placeholder-cerise-500
 * text-coral-400 bg-coral-900 border-coral-400 placeholder-coral-500
 * text-ochre-400 bg-ochre-900 border-ochre-400 placeholder-ochre-500
 * text-gold-400 bg-gold-900 border-gold-400 placeholder-gold-500
 * text-lime-400 bg-lime-900 border-lime-400 placeholder-lime-500
 * Force Tailwind to load classes
 * text-teal-700 border-teal-300 text-teal-900
 * text-blue-700 border-blue-300 text-blue-900
 * text-indigo-700 border-indigo-300 text-indigo-900
 * text-purple-700 border-purple-300 text-purple-900
 * text-cerise-700 border-cerise-300 text-cerise-900
 * text-coral-700 border-coral-300 text-coral-900
 * text-ochre-700 border-ochre-300 text-ochre-900
 * text-gold-700 border-gold-300 text-gold-900
 * text-lime-700 border-lime-300 text-lime-900
 */
const InputField: FC<InputFieldProps> = (props): ReactElement => {
  return (
    <div className="flex flex-col">
      {props.label && (
        <label
          htmlFor={props.name}
          className={`font-sans font-semibold text-sm pb-2 ${
            props.dark ? `text-${props.color}-400` : `text-${props.color}-700`
          }`}
        >
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`
        ${props.className ? props.className : ''}
        font-sans
        text-lg
        p-3
        border
        rounded-lg
        border-2
        focus:outline-none 
        focus:shadow-outline 
        ${
          props.dark
            ? `bg-${props.color}-900
                text-white
                border-${props.color}-400
                placeholder-${props.color}-500`
            : `bg-white
                text-${props.color}-900
                border-${props.color}-300`
        }
      `}
      />
    </div>
  );
};

InputField.defaultProps = {
  dark: false,
  color: 'teal',
  type: 'text',
  value: '',
  name: 'input-name',
  placeholder: 'Entre a value',
  disabled: false,
};

export default InputField;
