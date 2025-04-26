import Joi from 'joi';

//creating a schema validation using Joi

const userNameValidationSchema = Joi.object({
  firstName: Joi.string().max(10).trim().required(),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/)
    .message('Last name must contain only alphabets'),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Local Guardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Main Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  dateOfBirth: Joi.string().optional(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  presentAddress: Joi.string().required(),
  parmanentAddress: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .optional(),
  gurdian: guardianValidationSchema.required(),
  localGurdian: localGuardianValidationSchema.required(),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
