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

export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
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
