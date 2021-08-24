import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormGroup, FormSubtitle, FormTitle, Form, Label } from './FormElements';

describe('form element tests', () => {
  test('if renders form and elements', () => {
    render(
      <Form>
        <FormGroup>
          <FormTitle>HEY</FormTitle>
          <FormSubtitle>HEY</FormSubtitle>
          <Label inputId="yeah" labelText="HEY" />
        </FormGroup>
      </Form>
    );
    expect(screen.getByTestId('app-form-wrapper')).toBeInTheDocument();
  });
});
