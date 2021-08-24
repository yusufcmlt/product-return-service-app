import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import { languagesButtons } from 'utils/languages/languages';
import ticketSchema from 'utils/form-utils/schemas/ticketSchema';

import { Form } from 'components/form-elements/FormElements';
import Button from 'components/button/Button';
import FormPersonalInfo from './FormPersonalInfo';
import FormItemInfo from './FormItemInfo';

import '../../NewReturn.style.scss';

export default function NewReturnForm({ language }) {
  const history = useHistory();

  const resolver = useYupValidationResolver(ticketSchema);
  const { handleSubmit, register, formState } = useForm({ resolver, mode: 'onChange' });
  const { isValid } = formState;

  // Using languages
  const { startReturnProcess } = languagesButtons[language];

  const submitForm = (data) => {
    console.log(data);
    history.replace('/basvuru-basarili');
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormPersonalInfo {...{ register, formState, language }} />
      <FormItemInfo {...{ register, formState, language }} />
      <div className="form__part--button">
        <Button
          buttonText={startReturnProcess}
          buttonStyle="black"
          isSubmit
          isDisabled={!isValid}
        />
      </div>
    </Form>
  );
}
