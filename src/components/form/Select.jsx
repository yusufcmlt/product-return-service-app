import React from 'react';
import { useFormContext } from 'react-hook-form';

const Select = ({ id, options }) => {
  const { register } = useFormContext();
  return (
    <select id={id} {...register(id)}>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
