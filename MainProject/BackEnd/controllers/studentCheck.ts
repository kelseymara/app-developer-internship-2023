import { Request, Response } from "express";
import StudentModel, { IStudent } from "../models/StudentModel";

// Step One: connect to MongoDB database
// Insert code to connect to database (not shown in the provided code)

// CRUD Functions

// Create Function
export async function createStudent(req: Request, res: Response) {
  try {

    // Extracting the required data (name, Id, grade) from the request body
    const { name, Id, grade } = req.body;

    // Creating a new instance of the StudentModel (assuming StudentModel is a MongoDB model/schema) with the provided data
    // The new instance represents a new student that will be saved to the database
    const student: SCertification = new StudentModel({ name, Id, grade });

    // Saving the newly created student to the database using the save() method
    // This is an asynchronous operation, so we use await to wait for it to complete
    const savedStudent = await student.save();

    // Responding with a 201 status code (Created) and sending the saved student as a JSON response
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "An error occurred while creating the certification." });
  }
}

// To do: add the rest of CRUD functions
