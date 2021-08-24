import * as yup from 'yup';
import { capitalize } from 'lodash';

yup.setLocale({
  string: {
    min: () => `Bu alan gereklidir`,
    max: ({ path, max }) => `${capitalize(path)} must be at least ${max} character.`,
    required: () => `Bu alan gereklidir`,
  },
});

export default yup;
