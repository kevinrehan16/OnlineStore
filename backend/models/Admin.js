// import { required } from 'joi';
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);