import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  FormGroup,
  FormSubtitle,
  FormTitle,
  FormWrapper,
  Label,
  Select,
  TextInput,
} from './FormElements';

describe('form element tests', () => {
  test('if renders form and elements', () => {
    render(
      <FormWrapper>
        <FormGroup>
          <FormTitle>HEY</FormTitle>
          <FormSubtitle>HEY</FormSubtitle>
          <Label inputId="yeah" labelText="HEY" />
          <TextInput inputId="yeah" />
          <Select>
            <option>Yeah</option>
          </Select>
        </FormGroup>
      </FormWrapper>
    );
    expect(screen.getByTestId('app-form-wrapper')).toBeInTheDocument();
  });
});
