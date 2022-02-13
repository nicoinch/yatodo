import React, { useState, ChangeEvent } from 'react';
import InputField from './InputField';

export default {
  label: 'InputField',
  component: InputField,
};

export const Showcase = () => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
        <InputField
          label={'Project teal'}
          color={'teal'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project blue'}
          color={'blue'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project indigo'}
          color={'indigo'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project purple'}
          color={'purple'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project cerise'}
          color={'cerise'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project coral'}
          color={'coral'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project ochre'}
          color={'ochre'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project gold'}
          color={'gold'}
          value={inputValue}
          onChange={handleOnChange}
        />
        <InputField
          label={'Project lime'}
          color={'lime'}
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
      <div className="grid bg-teal-800 gap-4 md:grid-cols-4 p-4">
        <InputField
          label={'Project teal'}
          color={'teal'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project blue'}
          color={'blue'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project indigo'}
          color={'indigo'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project purple'}
          color={'purple'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project cerise'}
          color={'cerise'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project coral'}
          color={'coral'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project ochre'}
          color={'ochre'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project gold'}
          color={'gold'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
        <InputField
          label={'Project lime'}
          color={'lime'}
          value={inputValue}
          onChange={handleOnChange}
          dark
        />
      </div>
    </div>
  );
};
