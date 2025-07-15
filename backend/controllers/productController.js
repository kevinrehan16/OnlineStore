import Product from '../models/Product.js';
import Joi from 'joi'; //!! Validation library

export const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().allow(''),
  category: Joi.string().min(2).required(),
  image: Joi.string().uri().required(),
  rate: Joi.number().min(0).max(5).default(0),
  stock: Joi.number().integer().min(0).required()
});

export const productSchemaWithId = productSchema.keys({
  _id: Joi.string().length(24).hex().required()
});

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveProduct = async (req, res) => {
  const { error, value } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const newProduct = new Product(value);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const { error, value } = productSchemaWithId.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.body._id, value, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};