// import { required } from 'joi';
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryType: {type: String, required: true},
  categoryImage: {type: String, required: true}
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);