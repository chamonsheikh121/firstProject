import { Schema, model } from 'mongoose';
import {
  TGurdian,
  TStudent,
  TStudentMethood,
  TStudentModel,
  TUserName,
} from './student.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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
  password: String,
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
  isDeleted: {
    type: Boolean,
    default: false,
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

studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  user.password = await bcrypt.hash(user.password, Number(config.saltRound));

  next();
});
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  console.log(this.pipeline().unshift({$match :{ isDeleted: {$ne: true}}}))
  next();
});

export const Student = model<TStudent, TStudentModel>('Student', studentSchema);
