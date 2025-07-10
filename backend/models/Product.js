import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  rate: Number,
  stock: Number
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
