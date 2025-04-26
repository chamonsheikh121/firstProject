import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { Error } from 'mongoose';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: NewStudentData } = req.body;

    // const { error, value} = studentValidationSchema.validate(NewStudentData);

    // creating student validation using zod

    const zodParsedData = studentValidationSchema.parse(NewStudentData);

    console.log('I am from controller', zodParsedData);

    const result = await StudentServices.createStudentIntoDb(zodParsedData);
    console.log('this is chamon ali ama', result);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    //   return
    // }

    res.status(200).json({
      status: 'success',
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'somehting went wrong',
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
