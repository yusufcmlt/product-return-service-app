import React from 'react';

import './FormElements.style.scss';

// WRAPPERS

const Form = ({ children, ...props }) => (
  <form data-testid="app-form-wrapper" className="form" {...props}>
    {children}
  </form>
);

// Group form elements with a label if label text exists
// Add gap between elements
const FormGroup = ({ labelForId, labelText = '', errorText = '', children }) => (
  <div className="form__group">
    {labelText && <Label labelForId={labelForId} labelText={labelText} />}
    {children}
    <ErrorText errorText={errorText} />
  </div>
);

// ELEMENTS
const Label = ({ labelForId, labelText }) => (
  <label data-testid="app-label" className="form__label" htmlFor={labelForId}>
    {labelText}
  </label>
);

const FileInput = React.forwardRef(({ fileInputText = '', id }, ref) => (
  <label className="form__file-input" htmlFor={id}>
    {fileInputText}
    <input id={id} type="file" ref={ref} />
  </label>
));

// TITLES
const FormTitle = ({ children }) => (
  <h3 data-testid="app-form-title" className="form__title">
    {children}
  </h3>
);

const FormSubtitle = ({ children }) => (
  <h4 data-testid="app-form-subtitle" className="form__subtitle">
    {children}
  </h4>
);

// ERROR
const ErrorText = ({ errorText = '' }) => <p className="form__error">{errorText}</p>;

export { Form, FormTitle, FormSubtitle, Label, FormGroup, FileInput, ErrorText };
