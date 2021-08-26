import React from 'react';

// Show current form element's status (invalid | valid )

const StatusText = ({ isTextShown, statusText = '', ...props }) => (
  <p
    {...props}
    role="alert"
    className={`form__status-text form__status-text--${statusText ? 'error' : 'valid'}`}
    style={{ visibility: isTextShown ? 'visible' : 'hidden' }}
  >
    {statusText || 'Uygun'}
  </p>
);

export default StatusText;
