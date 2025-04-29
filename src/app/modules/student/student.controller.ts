import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { Error } from 'mongoose';




const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDb();
    res.status(200).json({
      success: true,
      message: 'Student data retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Student data retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log('I am from controller', error);
  }
};
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.deleteStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'somehting went wrong',
    });
  }
};

export const StudentController = {

  getAllStudent,
  getStudent,
  deleteStudent
};
