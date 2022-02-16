import React, { FC, ReactElement } from 'react';
import Button from '../buttons/Button';

interface SectionTitleProps {
  dark?: boolean;
  color?: string;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

/*
 * Force Tailwind to load classes
 * text-teal-400 text-teal-600
 * text-blue-400 text-blue-600
 * text-indigo-400 text-indigo-600
 * text-purple-400 text-purple-600
 * text-cerise-400 text-cerise-600
 * text-coral-400 text-coral-600
 * text-ochre-400 text-ochre-600
 * text-gold-400 text-gold-600
 * text-lime-400 text-lime-600
 * text-gray-400 text-gray-600
 */
const SectionTitle: FC<SectionTitleProps> = (props): ReactElement => (
  <div className={'w-full flex justify-between items-center'}>
    <div
      className={`font-semibold text-lg ${
        props.dark ? `text-${props.color}-400` : `text-${props.color}-600`
      }`}
    >
      {props.title}
    </div>
    {props.onButtonClick && (
      <Button
        label={props.buttonLabel}
        onClick={props.onButtonClick}
        className={''}
        dark={props.dark}
        color={props.color}
        small
      />
    )}
  </div>
);

SectionTitle.defaultProps = {
  dark: false,
  color: 'teal',
  title: 'Section',
  buttonLabel: 'Add',
};

export default SectionTitle;
