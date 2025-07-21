import Category from '../models/Category.js'
import Joi from 'joi';

export const categorySchema = Joi.object({
  categoryType: Joi.string().min(2).max(100).required(),
});

export const getCategories = async(req, res) => {
  try {
    const categories = await Category.find().sort("_id");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

export const saveCategory = async(req, res) => {

  const {error, value } = categorySchema.validate(req.body, {abortEarly: false});

  if (error) {
    const errors = {};
    error.details.forEach(detail => {
      const field = detail.path[0]; // e.g., "name", "price"
      errors[field] = detail.message.replace(/['"]+/g, '');
    });
    return res.status(400).json({ errors });
  }

  try {
    const newCategory = new Category(value);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}