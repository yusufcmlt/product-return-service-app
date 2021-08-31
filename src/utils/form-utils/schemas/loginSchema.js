import yup from './yup';

const loginSchema = yup.object().shape({
  adminUserName: yup.string().trim('*Gerekli alan').required('*Gerekli alan'),
  adminPassword: yup.string().trim('*Gerekli alan').required('*Gerekli alan'),
});

export default loginSchema;
