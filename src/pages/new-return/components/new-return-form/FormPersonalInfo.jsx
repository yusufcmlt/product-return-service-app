import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import Form from 'components/form/Form';

/**
 * Personal Info part of new return form.
 */

export default function FormPersonalInfo() {
  const { formState } = useFormContext();
  const { errors, dirtyFields } = formState;

  useEffect(() => {
    console.log(errors);
    console.log(dirtyFields);
  });

  return (
    <div className="form__part--personal">
      <Form.Row>
        <Form.Title>Kişisel bilgileriniz</Form.Title>
        <Form.Subtitle>Merak etmeyin aramızda kalacak :)</Form.Subtitle>
      </Form.Row>
      <Form.Row
        labelForId="ticketFirstName"
        labelText="Adınız"
        statusText={errors?.ticketFirstName?.message}
        isTextShown={!!dirtyFields.ticketFirstName || !!errors.ticketFirstName}
      >
        <Form.TextInput id="ticketFirstName" />
      </Form.Row>
      <Form.Row
        labelForId="ticketLastName"
        labelText="Soyadınız"
        statusText={errors?.ticketLastName?.message}
        isTextShown={!!dirtyFields.ticketLastName || !!errors.ticketLastName}
      >
        <Form.TextInput id="ticketLastName" />
      </Form.Row>
      <Form.Row
        labelForId="ticketAge"
        labelText="Yaşınız"
        statusText={errors?.ticketAge?.message}
        isTextShown={!!dirtyFields.ticketAge || !!errors.ticketAge}
      >
        <Form.TextInput id="ticketAge" />
      </Form.Row>
      <Form.Row
        labelForId="ticketIdNumber"
        labelText="TC No"
        statusText={errors?.ticketIdNumber?.message}
        isTextShown={!!dirtyFields.ticketIdNumber || !!errors.ticketIdNumber}
      >
        <Form.TextInput id="ticketIdNumber" />
      </Form.Row>
      <Form.Row
        labelForId="ticketTelNumber"
        labelText="Telefon"
        statusText={errors?.ticketTelNumber?.message}
        isTextShown={!!dirtyFields.ticketTelNumber || !!errors.ticketTelNumber}
      >
        <Form.TextInput id="ticketTelNumber" />
      </Form.Row>
      <Form.Row
        labelForId="ticketAddress"
        labelText="Adres"
        statusText={errors?.ticketAddress?.message}
        isTextShown={!!dirtyFields.ticketAddress || !!errors.ticketAddress}
      >
        <Form.TextArea id="ticketAddress" />
      </Form.Row>
    </div>
  );
}
