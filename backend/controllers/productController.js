import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveProduct = async (req, res) => {
  const { name, price, description, category, image, rate, stock } = req.body;

  try {
    const newProduct = new Product({ name, price, description, category, image, rate, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};