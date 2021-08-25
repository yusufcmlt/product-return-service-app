import React from 'react';

// Show current form element's status (invalid | valid )

const StatusText = ({ isTextShown, statusText = '' }) =>
  isTextShown && (
    <p className={`form__status-text form__status-text--${statusText ? 'error' : 'valid'}`}>
      {statusText || 'Uygun'}
    </p>
  );

export default StatusText;
