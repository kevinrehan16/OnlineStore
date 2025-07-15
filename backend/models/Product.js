import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  image: String,
  description: String,
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  rate: { type: Number, default: 0, min: 0, max: 5 },
  stock: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
