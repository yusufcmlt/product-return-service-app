import React from 'react';

const FormLabel = ({ labelForId, labelText }) =>
  labelText && (
    <label className="form__label" htmlFor={labelForId} data-testid={`test-label-${labelForId}`}>
      {labelText}
    </label>
  );

export default FormLabel;
