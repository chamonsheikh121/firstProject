// import { Schema, model, connect } from 'mongoose';

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'others';
  email: string;
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;

  parmanentAddress: string;
  bloodGroup?: 'A+' | 'A' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};
