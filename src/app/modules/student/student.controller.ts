import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { Error } from 'mongoose';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: NewStudentData } = req.body;
    console.log('data getting', NewStudentData);

    const result = await StudentServices.createStudentIntoDb(NewStudentData);
    res.status(200).json({
      status: 'success',
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

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

export const StudentController = {
  createStudent,
  getAllStudent,
  getStudent,
};
