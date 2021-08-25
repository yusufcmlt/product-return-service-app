import React from 'react';
import { useFormContext } from 'react-hook-form';

// Custom file input using react-hook-form's register props/refs
const FileInput = ({ fileInputText = '', id }) => {
  const { register } = useFormContext();
  return (
    <label className="form__file-input" htmlFor={id}>
      {fileInputText}
      <input id={id} type="file" {...register(id)} multiple />
    </label>
  );
};

export default FileInput;
