import React from 'react';
import FormLabel from './Label';
import StatusText from './StatusText';

// Group form elements
// Add gap between elements
// Add label and/or status text if they exist
const FormRow = ({
  labelForId = '',
  labelText = '',
  statusText = '',
  isTextShown = false,
  children,
}) => {
  // Check validity of specific form group
  const showStatusText = () => {
    const errorShown = statusText && isTextShown;
    const validShown = !statusText && isTextShown;
    if (errorShown) {
      return ' form__row--box-error';
    }
    if (validShown) {
      return ' form__row--box-valid';
    }
    return '';
  };

  return (
    <div className={`form__row${showStatusText()}`}>
      <div className="form__row__header">
        <FormLabel labelForId={labelForId} labelText={labelText} />
        <StatusText data-testid={`test-stattext-${labelForId}`} {...{ statusText, isTextShown }} />
      </div>
      {children}
    </div>
  );
};

export default FormRow;
