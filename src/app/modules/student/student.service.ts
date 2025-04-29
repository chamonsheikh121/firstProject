
import { Student } from './student.models';



const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getStudentFromDb = async (id: string) => {


  // const result = await Student.find({ id });
  const result = await Student.aggregate([
    {
      $match: {
        id: id
      }
    }
  ])


  
  return result;
};
const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {

  getAllStudentFromDb,
  getStudentFromDb, 
  deleteStudentFromDb,
};
