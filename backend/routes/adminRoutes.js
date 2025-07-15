import express from 'express';
import { body } from 'express-validator';
import { registerAdmin, loginAdmin } from '../controllers/adminController.js';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Enter valid email'),
    body('firstname').notEmpty().withMessage('Please enter your firstname'),
    body('lastname').notEmpty().withMessage('Please enter your lastname'),
    body('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
  ],
  registerAdmin
);

router.post('/login', loginAdmin);


//!! CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE
// router.get('/fix-admins', async (req, res) => {
//   try {
//     const result = await Admin.updateMany(
//       {
//         $or: [
//           { firstname: { $exists: false } },
//           { lastname: { $exists: false } }
//         ]
//       },
//       {
//         $set: {
//           firstname: 'Unknown',
//           lastname: 'Admin'
//         }
//       }
//     );
//     res.json({ message: 'Update complete', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
//!! END CODES TO FIX THE FIELD IF YOU ADD NEW FIELD IN A TABLE

export default router;
