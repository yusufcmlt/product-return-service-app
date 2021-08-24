import yup from './yup';

const ticketSchema = yup.object().shape({
  ticketFirstName: yup
    .string()
    .trim('*Ad alanını boş bırakamazsınız')
    .min(1, '*Ad alanını boş bırakamazsınız')
    .required('*Gerekli alan'),
  ticketLastName: yup
    .string()
    .trim('*Soyad alanını boş bırakamazsınız')
    .min(1, '*Soyad alanını boş bırakamazsınız')
    .required('*Gerekli alan'),
  ticketAge: yup
    .number()
    .typeError('*Yaşınız bir sayı olmalı')
    .positive('*Yaşınız negatif olamaz')
    .test('max age', '120 yaşından büyük değilsinizdir', (val) => val <= 120)
    .required('*Gerekli alan'),
  ticketIdNumber: yup
    .string()
    .min(11, '*Kimlik no 11 rakamdan oluşmalı')
    .max(11, '*Kimlik no 11 rakamdan oluşmalı')
    .matches(/^[0-9]+$/, '*Kimlik no sadece rakamlardan oluşmalı')
    .required('*Gerekli alan'),
  ticketTelNumber: yup
    .string()
    .min(11, '*Telefon no en az 10 en fazla 11 rakamdan oluşmalı')
    .max(11, '*Telefon no en az 10 en fazla 11 rakamdan oluşmalı')
    .matches(/^[0-9]+$/, '*Telefon no sadece rakamlardan oluşmalı')
    .required('*Gerekli alan'),
  ticketAddress: yup
    .string()
    .min(20, '*En az 20 karakter')
    .max(100, '*En fazla 100 karakter')
    .required('*Gerekli alan'),
  ticketReason: yup.string().required('*Gerekli alan'),
  ticketReasonDetail: yup
    .string()
    .min(20, '*En az 20 karakter')
    .max(100, '*En fazla 100 karakter')
    .required('*Gerekli alan'),
});

export default ticketSchema;
