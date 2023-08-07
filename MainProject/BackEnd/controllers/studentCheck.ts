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
    const student: IStudent = new StudentModel({ name, Id, grade });

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

// Retrieve/get all students
export async function getStudents(req: Request, res: Response) {
  try {

   //  Retrieve all students from the database
    const students = await StudentModel.find();

    // Return the students as the response
    res.json(students);
  } catch (error) {
    console.error("Error getting students:", error);
    res.status(500).json({ error: "An error occurred while getting students." });
  }
}

// Retrieve/get student by Id (not database generated Id, the Id given) 
// Get a specific student by ID
export async function getStudentById(req: Request, res: Response) {
  const {Id}=req.params;// student ID in url params
  // if database ID: then  const studentId = req.params.id;

  try {
    const student= await StudentModel.findOne({Id:Id}); // search for the one student in the database whose Id attribute matches the provided Id
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Return the student as the response
    res.json(student);
  } catch (error) {
    console.error("Error getting student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update Function by Id (not database generated Id, the Id given) 
export async function updateStudent(req: Request, res: Response) {
  try {
    // Get the studentID from the request parameters
    const { Id } = req.params;

    // Find the student record in the database by Id and update it
    // The 'req.body' contains the updated data for the student
    // The 'new: true' option returns the updated student document as the result
    const updatedStudent: IStudent | null = await StudentModel.findByIdAndUpdate(
      Id,
      req.body,
      { new: true }
    );

    // If the student record is not found, return an error response
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found." });
    }

    // Respond with the updated student record as JSON
    res.json(updatedStudent);
  } catch (error) {
    // If an error occurs during the process, it will be caught here
    console.error("Error updating student:", error);

    // Responding with a 500 status code (Internal Server Error) and sending an error message as a JSON response
    res.status(500).json({ error: "An error occurred while updating the student." });
  }
}

// Delete Function by Id (not database generated Id, the Id given) 
export async function deleteStudent(req: Request, res: Response) {
  try {
    // Get the studentID from the request parameters
    const { Id } = req.params;

    // Find the student record in the database by custom Id and remove it
    const deletedStudent: IStudent | null = await StudentModel.findOneAndRemove{(Id)};

    //  If the student record is not found, return an error response
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found." });
    }

    // Step 4: Respond with the deleted student record as JSON
    res.json(deletedStudent);
  } catch (error) {
    // If an error occurs during the process, it will be caught here
    console.error("Error deleting student:", error);

    // Responding with a 500 status code (Internal Server Error) and sending an error message as a JSON response
    res.status(500).json({ error: "An error occurred while deleting the student." });
  }
}


