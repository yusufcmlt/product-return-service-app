import React from 'react';

const FormLabel = ({ labelForId, labelText }) =>
  labelText && (
    <label data-testid="app-label" className="form__label" htmlFor={labelForId}>
      {labelText}
    </label>
  );

export default FormLabel;
