import React from 'react';
import {
  FileInput,
  FormGroup,
  FormSubtitle,
  FormTitle,
} from 'components/form-elements/FormElements';

import { languagesButtons, languagesForms } from 'utils/languages/languages';

export default function FormItemInfo({ language, register, formState }) {
  const { errors } = formState;
  // Using languages
  const {
    returnInfoTitle,
    returnInfoSubtitle,
    returnReasonLabel,
    returnReasonDetailLabel,
    addFileLabel,
  } = languagesForms[language];

  const { addFile } = languagesButtons[language];

  return (
    <div className="form__part--item">
      <FormGroup>
        <FormTitle>{returnInfoTitle}</FormTitle>
        <FormSubtitle>{returnInfoSubtitle}</FormSubtitle>
      </FormGroup>
      <FormGroup
        labelForId="ticketReason"
        labelText={returnReasonLabel}
        errorText={errors?.ticketReason?.message}
      >
        <select id="ticketReason" {...register('ticketReason')}>
          <option>TEST</option>
        </select>
      </FormGroup>
      <FormGroup
        labelForId="ticketReasonDetail"
        labelText={returnReasonDetailLabel}
        errorText={errors?.ticketReasonDetail?.message}
      >
        <textarea id="ticketReasonDetail" {...register('ticketReasonDetail')} />
      </FormGroup>
      <FormGroup>
        <p className="form__label">{addFileLabel}</p>
        <FileInput id="ticketFile" fileInputText={addFile} {...register('ticketFile')} />
      </FormGroup>
    </div>
  );
}
