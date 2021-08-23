import React from 'react';

import './FormElements.style.scss';

// WRAPPERS

// Form Element itself
function FormWrapper({ children }) {
  return (
    <form data-testid="app-form-wrapper" className="form">
      {children}
    </form>
  );
}
// Group form elements and add gapp between
function FormGroup({ id, labelText = '', children }) {
  return (
    <div className="form__group">
      {labelText && <Label forId={id} labelText={labelText} />}
      {children}
    </div>
  );
}

// ELEMENTS

function TextInput({ inputName, type = 'text', id }) {
  return (
    <input
      data-testid="app-input"
      id={id}
      name={inputName}
      type={type}
      className="form__text-input"
    />
  );
}

function Label({ forId, labelText }) {
  return (
    <label data-testid="app-label" className="form__label" htmlFor={forId}>
      {labelText}
    </label>
  );
}

function Select({ selectName, id, children }) {
  return (
    <select data-testid="app-select" id={id} name={selectName} className="form__select">
      {children}
    </select>
  );
}

function TextArea({ textAreaName, id, cols = '30', rows = '10' }) {
  return (
    <textarea
      id={id}
      name={textAreaName}
      cols={cols}
      rows={rows}
      className="form__text-input form__textarea"
    />
  );
}

function FileInput({ id, fileInputText = '' }) {
  return (
    <label className="form__file-input" htmlFor={id}>
      {fileInputText}
      <input id={id} type="file" />
    </label>
  );
}

// TITLES
function FormTitle({ children }) {
  return (
    <h3 data-testid="app-form-title" className="form__title">
      {children}
    </h3>
  );
}

function FormSubtitle({ children }) {
  return (
    <h4 data-testid="app-form-subtitle" className="form__subtitle">
      {children}
    </h4>
  );
}

// ERROR
function ErrorText({ errorText = '' }) {
  return errorText && <p className="form__error">{errorText}</p>;
}

export {
  FormTitle,
  FormSubtitle,
  FormWrapper,
  TextInput,
  Label,
  FormGroup,
  Select,
  TextArea,
  FileInput,
  ErrorText,
};
