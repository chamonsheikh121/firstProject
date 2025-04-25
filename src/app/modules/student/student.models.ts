import { Schema, model } from 'mongoose';
import { Gurdian, Student, UserName } from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'brother first name is requied'],
    maxLength: [10, "First name can't be more that 10 characters"],
    trim: true,
    validate: {
      validator: function (value: string) {
        console.log(value);
        const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
        return capitalized === value;
      },
      message: 'First name must start with a capital Letter',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'brother last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} contains number, Last name must contain only alphabets',
    },
  },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, requrired: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, reuquired: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message:
        '{VALUE} is not supported. Gender must be one of: male, female, others.',
    },
    required: [true, 'Gender is required'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email address',
    },
  },
  dateOfBirth: {
    type: String,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    unique: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  gurdian: {
    type: gurdianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGurdian: {
    type: localGurdianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
