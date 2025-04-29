import { Model } from 'mongoose';

export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string; // optional
  lastName: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'others';
  email: string;
  dateOfBirth?: string; // optional
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  parmanentAddress: string;
  bloodGroup?: 'A+' | 'A' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'; // optional
  gurdian: TGurdian;
  localGurdian: TLocalGurdian;
  profileImage?: string; // optional
  isActive?: 'active' | 'blocked'; // optional (has default in zod);
  isDeleted?: boolean;
};

export type TStudentMethood = {
  // eslint-disable-next-line no-unused-vars
  isIdExists(id: string): Promise<TStudent | null>;
};

export interface TStudentModel
  extends Model<TStudent, Record<string, never>, TStudentMethood> {
  // eslint-disable-next-line no-unused-vars
  isEmailExists(email: string): Promise<TStudent | null>;
}
