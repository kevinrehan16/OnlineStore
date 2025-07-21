import express from 'express';
import { getCategories, saveCategory } from '../controllers/categoryController.js';
import Category from '../models/Category.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/save', saveCategory);
// router.put('/update', updateProduct);


//!! CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE
// router.get('/fix-category', async (req, res) => {
//   try {
//     const result = await Category.updateMany(
//       { categoryImage: { $exists: false } },
//       { $set: { categoryImage: '/assets/images/categories/electronics.avif' } }
//     );
//     res.json({ message: 'Update complete', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
//!! END CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE
export default router;
