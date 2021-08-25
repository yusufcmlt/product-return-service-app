import React from 'react';

import FormSubtitle from './Subtitle';
import FormTitle from './Title';
import FormLabel from './Label';
import TextInput from './TextInput';
import FileInput from './FileInput';
import StatusText from './StatusText';
import TextArea from './TextArea';
import Select from './Select';
import FormRow from './Row';

import './Form.style.scss';

// Form element itself
const Form = ({ children, onSubmit }) => (
  <form data-testid="app-form-wrapper" className="form" onSubmit={onSubmit}>
    {children}
  </form>
);

// Compound form elements
Form.Title = FormTitle;
Form.Subtitle = FormSubtitle;
Form.Label = FormLabel;
Form.TextInput = TextInput;
Form.FileInput = FileInput;
Form.Row = FormRow;
Form.Status = StatusText;
Form.TextArea = TextArea;
Form.Select = Select;
Form.TextInput = TextInput;

export default Form;
