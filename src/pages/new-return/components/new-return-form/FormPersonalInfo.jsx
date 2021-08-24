import React, { useEffect } from 'react';

import { languagesForms } from 'utils/languages/languages';

import { FormGroup, FormSubtitle, FormTitle } from 'components/form-elements/FormElements';

export default function FormPersonalInfo({ language, register, formState }) {
  const { errors } = formState;

  // Using languages
  const {
    personalInfoTitle,
    personalInfoSubtitle,
    nameLabel,
    lastNameLabel,
    idNumberLabel,
    telNumberLabel,
    ageLabel,
    addressLabel,
  } = languagesForms[language];

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="form__part--personal">
      <FormGroup>
        <FormTitle>{personalInfoTitle}</FormTitle>
        <FormSubtitle>{personalInfoSubtitle}</FormSubtitle>
      </FormGroup>
      <FormGroup
        labelForId="ticketFirstName"
        labelText={nameLabel}
        errorText={errors?.ticketFirstName?.message}
      >
        <input id="ticketFirstName" {...register('ticketFirstName')} />
      </FormGroup>
      <FormGroup
        labelForId="ticketLastName"
        labelText={lastNameLabel}
        errorText={errors?.ticketLastName?.message}
      >
        <input id="ticketLastName" {...register('ticketLastName')} />
      </FormGroup>
      <FormGroup labelForId="ticketAge" labelText={ageLabel} errorText={errors?.ticketAge?.message}>
        <input id="ticketAge" {...register('ticketAge')} />
      </FormGroup>
      <FormGroup
        labelForId="ticketIdNumber"
        labelText={idNumberLabel}
        errorText={errors?.ticketIdNumber?.message}
      >
        <input id="ticketIdNumber" {...register('ticketIdNumber')} />
      </FormGroup>
      <FormGroup
        labelForId="ticketTelNumber"
        labelText={telNumberLabel}
        errorText={errors?.ticketTelNumber?.message}
      >
        <input id="ticketTelNumber" {...register('ticketTelNumber')} />
      </FormGroup>
      <FormGroup
        labelForId="ticketAddress"
        labelText={addressLabel}
        errorText={errors?.ticketAddress?.message}
      >
        <textarea id="ticketAddress" {...register('ticketAddress')} />
      </FormGroup>
    </div>
  );
}
