import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  inviter_id: yup.string().nullable().required(),
  invitee_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
