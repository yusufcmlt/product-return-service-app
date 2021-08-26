import Form from 'components/form/Form';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { newTicketFormOptions } from 'utils/form-utils/formConstants';

export default function FormItemInfo() {
  const { formState } = useFormContext();
  const { errors, dirtyFields } = formState;

  return (
    <div className="form__part--item">
      <Form.Row>
        <Form.Title>İadenizle ilgili bilgiler</Form.Title>
        <Form.Subtitle>Ürününüzle yaşadığınız sorunun detaylarını yazın.</Form.Subtitle>
      </Form.Row>
      <Form.Row
        labelForId="ticketItemCode"
        labelText="Ürün kodu (5-10 karakter)"
        statusText={errors?.ticketItemCode?.message}
        isTextShown={!!dirtyFields.ticketItemCode || !!errors.ticketItemCode}
      >
        <Form.TextInput id="ticketItemCode" />
      </Form.Row>
      <Form.Row
        labelForId="ticketReason"
        labelText="İade nedeni"
        errorText={errors?.ticketReason?.message}
        isTextShown={!!dirtyFields.ticketReason || !!errors.ticketReason}
      >
        <Form.Select id="ticketReason" options={newTicketFormOptions} />
      </Form.Row>
      <Form.Row
        labelForId="ticketReasonDetail"
        labelText="Yaşadığınız sorunun detayları (en az 20 karakter)"
        statusText={errors?.ticketReasonDetail?.message}
        isTextShown={!!dirtyFields.ticketReasonDetail || !!errors.ticketReasonDetail}
      >
        <Form.TextArea id="ticketReasonDetail" />
      </Form.Row>
      <Form.Row
        labelText="Sorunuzla ilgili fotoğraf ekleyin(Max: 3 adet)"
        statusText={errors?.ticketFile?.message}
        isTextShown={!!dirtyFields.ticketFile || !!errors.ticketFile}
      >
        <Form.FileInput id="ticketFile" fileInputText="Dosya Ekle" />
      </Form.Row>
    </div>
  );
}
