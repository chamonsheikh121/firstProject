import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'female'],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  bloodGroup: ['A+', 'A', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  gurdian: {
    fatherName: { type: String, requrired: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    MotherContactNo: { type: String, required: true },
  },
  localGurdian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, reuquired: true },
    address: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: ['active', 'inactive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
