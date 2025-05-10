import * as yup from 'yup';

export const ProductReqForm = yup.object().shape({
  name: yup.string()
  .required('Name is required')
  .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces')
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must not exceed 50 characters'),
  
  company: yup.string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters'),
    
    mobile: yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{6,14}$/, 'Mobile number must be between 6 and 14 digits'),
    
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
    
//   message: yup.string()
//     .required('Message is required')
//     .min(10, 'Message must be at least 10 characters')
//     .max(500, 'Message must not exceed 500 characters')
});

export default ProductReqForm;