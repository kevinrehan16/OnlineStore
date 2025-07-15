import express from 'express';
import { getProducts, saveProduct, updateProduct } from '../controllers/productController.js';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/save', saveProduct);
router.put('/update', updateProduct);

//!! CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE
// router.get('/fix-category', async (req, res) => {
//   try {
//     const result = await Product.updateMany(
//       { category: { $exists: false } },
//       { $set: { category: 'Uncategorized' } }
//     );
//     res.json({ message: 'Update complete', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
//!! END CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE

export default router;
