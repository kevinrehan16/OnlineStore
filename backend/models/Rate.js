// import { required } from 'joi';
import mongoose from 'mongoose';

const rateSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  rateValue: {type: Number, required: true, min: 0},
}, { timestamps: true });

export default mongoose.model('Rate', rateSchema);