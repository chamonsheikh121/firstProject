import { Schema, model } from 'mongoose';
import {
  TGurdian,
  TStudent,
  TStudentMethood,
  TStudentModel,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: String,
  middleName: String,
  lastName: String,
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

const localGurdianSchema = new Schema({
  name: String,
  occupation: String,
  contactNo: String,
  address: String,
});

const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethood>({
  id: String,
  name: userNameSchema,
  gender: String,
  email: String,
  dateOfBirth: String,
  contactNo: String,
  emergencyContactNo: String,
  presentAddress: String,
  parmanentAddress: String,
  bloodGroup: String,
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImage: String,
  isActive: {
    type: String,
    default: 'active',
  },
});

studentSchema.methods.isIdExists = async function (id: string) {
  const isIdExist = await Student.findOne({ id });
  return isIdExist;
};

studentSchema.statics.isEmailExists = async function (email: string) {
  const isEmailExist = await Student.findOne({ email });
  return isEmailExist;
};

export const Student = model<TStudent, TStudentModel>('Student', studentSchema);
