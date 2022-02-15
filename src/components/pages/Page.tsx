import React, { FC, ReactComponentElement } from 'react';

interface PageProps {
  dark?: boolean;
  color?: string;
  content?: ReactComponentElement<any>;
  className?: string;
  header?: ReactComponentElement<any>;
}

/**
 * Force Tailwind to load classes for dark mode
 * bg-teal-100 bg-teal-800
 * bg-blue-100 bg-blue-800
 * bg-indigo-100 bg-indigo-800
 * bg-purple-100 bg-purple-800
 * bg-cerise-100 bg-cerise-800
 * bg-coral-100 bg-coral-800
 * bg-ochre-100 bg-ochre-800
 * bg-gold-100 bg-gold-800
 * bg-lime-100 bg-lime-800
 * bg-gray-100 bg-gray-800
 */
const Page: FC<PageProps> = (props) => {
  return (
    <div
      className={`
          ${props.className ? props.className : ''}
          ${props.dark ? `bg-black` : `bg-white`}
          h-full 
          w-full 
          flex flex-col items-center
          max-w-xxl`}
    >
      <div
        className={`${
          props.dark ? `text-white bg-black` : `text-gray-700 bg-white`
        } w-full py-4 text-center`}
      >
        {props.header}
      </div>
      <div
        className={`
          ${props.className ? props.className : ''}
          h-full
          w-full
          p-4
          rounded-t-xxl
          max-w-xxl
          ${props.dark ? `bg-${props.color}-800` : `bg-${props.color}-100`}`}
      >
        {props.content}
      </div>
    </div>
  );
};

Page.defaultProps = {
  dark: false,
  color: 'teal',
};

export default Page;
