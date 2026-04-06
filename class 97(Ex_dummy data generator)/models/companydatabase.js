import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    isManager: Boolean
});

export const Employee = mongoose.model('Employee', companySchema, 'employees');