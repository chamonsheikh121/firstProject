import { Student } from './student.interface';
import { StudentModel } from './student.models';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentFromDb = async (id: string) => {
  const result = await StudentModel.find({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentFromDb,
  getStudentFromDb,
};
