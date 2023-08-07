import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the Student
const certificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Id: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

// Define the interface for the Student document
export interface IStudent extends Document {
  name: string;
  Id: Number;
  grade: string;
}

// Create and export the Certification model
export default mongoose.model<IStudent>(
  "Student",
  studentSchema
);
