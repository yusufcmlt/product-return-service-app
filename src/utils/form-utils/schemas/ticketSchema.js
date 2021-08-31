import yup from './yup';

const numberMatcher = /^[0-9]+$/; // Only numbers

const fileTypes = ['image/webp', 'image/jpeg', 'image/png'];
const maxFileSizeByte = 5242880; // 5MB

// Only accept photograph extensions
const checkFileTypes = (files) => {
  const fileKeys = Object.keys(files);
  return fileKeys.every((key) => fileTypes.includes(files[key].type));
};

// Only accept file sizes lower than 5MB
const checkFileSizes = (files) => {
  const fileKeys = Object.keys(files);
  return fileKeys.every((key) => files[key].size <= maxFileSizeByte);
};

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
    .matches(numberMatcher, '*Kimlik no sadece rakamlardan oluşmalı')
    .required('*Gerekli alan'),
  ticketTelNumber: yup
    .string()
    .min(10, '*Telefon no en az 10 en fazla 11 rakamdan oluşmalı')
    .max(11, '*Telefon no en az 10 en fazla 11 rakamdan oluşmalı')
    .matches(numberMatcher, '*Telefon no sadece rakamlardan oluşmalı')
    .required('*Gerekli alan'),
  ticketAddress: yup
    .string()
    .min(20, '*En az 20 karakter')
    .max(100, '*En fazla 100 karakter')
    .required('*Gerekli alan'),
  ticketItemCode: yup
    .string()
    .trim('*Ürün kodunu boş bırakamazsınız')
    .min(5, '*Ürün kodu en az 5 en fazla 10 karakterden oluşmalı')
    .max(10, '*Ürün kodu en az 5 en fazla 10 karakterden oluşmalı')
    .required('*Gerekli alan'),
  ticketReason: yup.string().required('*Gerekli alan'),
  ticketReasonDetail: yup
    .string()
    .min(20, '*En az 20 karakter')
    .max(100, '*En fazla 100 karakter')
    .required('*Gerekli alan'),
  ticketFile: yup
    .mixed()
    .test('IS_ADDED', 'Dosya eklemelisiniz', (value) => Object.keys(value).length)
    .test('FILE_FORMAT', 'Desteklenmeyen dosyalar', (value) => checkFileTypes(value))
    .test('FILE_SIZE', "Dosya boyutu 5MB'dan büyük", (value) => checkFileSizes(value))
    .test(
      'FILE_COUNT',
      '3 Dosyadan fazla ekleyemezsiniz',
      (value) => Object.keys(value).length <= 3
    )
    .required(),
});

export default ticketSchema;
