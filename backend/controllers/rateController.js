import Rate from "../models/Rate.js";
import Joi from 'joi';

export const rateSchema = Joi.object({
  product_id: Joi.string().min(2).max(100).required(),
  rateValue: Joi.number().min(0).max(5).default(0)
});

export const getRates = async(req, res) => {
  try {
    const rates = await Rate.find().sort("_id");
    res.status(200).json(rates);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

export const saveRate = async (req, res) => {
  const { error, value } = rateSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = {};
    error.details.forEach(detail => {
      const field = detail.path[0]; // e.g., "name", "price"
      errors[field] = detail.message.replace(/['"]+/g, '');
    });
    return res.status(400).json({ errors });
  }

  try {
    const newRate = new Rate(value);
    await newRate.save();
    res.status(201).json(newRate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};