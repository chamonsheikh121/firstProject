import { z } from 'zod';

// Name validation
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(10, { message: 'first name can not be more than 30 characters' })
    .trim()
    .min(1, { message: 'first name can not be empty' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .regex(/^[A-Za-z]+$/, { message: 'Last name must contain only alphabets' }),
});

// Guardian validation
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Local guardian validation
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Main student schema
const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20).min(6),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'others']),
  email: z.string().email(),
  dateOfBirth: z.string().optional(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  bloodGroup: z
    .enum(['A+', 'A', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
    .optional(),
  gurdian: guardianValidationSchema,
  localGurdian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().optional()
});

export default studentValidationSchema;
