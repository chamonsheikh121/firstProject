import { TStudent } from './student.interface';
import { Student } from './student.models';

const createStudentIntoDb = async (student: TStudent) => {
  // const result = await Student.create(student); // build in static method of mongoose

  if (await Student.isEmailExists(student.email)) {
    throw new Error(
      'According to this email address, this user already exists',
    );
  }

  const studentInstance = new Student(student); // created an instance

  if (await studentInstance.isIdExists(student.id)) {
    throw new Error('According to the id, this user already exists');
  }

  const result = await studentInstance.save(); // built in instance methood

  return result;
};

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getStudentFromDb = async (id: string) => {
  const result = await Student.find({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentFromDb,
  getStudentFromDb,
};
