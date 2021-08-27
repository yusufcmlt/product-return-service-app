import yup from './yup';

const ticketUpdateFormSchema = yup.object().shape({
  ticketStatus: yup.string().trim('*Gerekli alan').required('*Gerekli alan'),
  ticketResponseMessage: yup
    .string()
    .trim('*Gerekli alan')
    .min(10, '*En az 10 karakter')
    .max(100, '*En fazla 100 karakter')
    .required('*Gerekli alan'),
});

export default ticketUpdateFormSchema;
