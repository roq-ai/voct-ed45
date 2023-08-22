import * as yup from 'yup';

export const formValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
