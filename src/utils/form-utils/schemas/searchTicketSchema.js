import yup from './yup';

const ticketSearchSchema = yup.object().shape({
  ticketSearch: yup.string().trim('*Gerekli alan').required('*Gerekli alan'),
});

export default ticketSearchSchema;
