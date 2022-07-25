import * as yup from 'yup';

export default yup.object().shape({
  name: yup
  .string()
  .trim()
  .min(3, "Name must contain more than 3 characters")
  .max(16, "Name must be less than 16 characters")
  .required('Name required'),
  email: yup
  .string()
  .trim()
  .email('Please enter a valid email address')
  .required('Email required'),
  phone: yup
  .number()
  .typeError('Phone number required')
  .min(10, `Phone number should have 10 digits`)
  .required('Phone number required'),
});