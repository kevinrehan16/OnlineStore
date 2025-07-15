import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';

// APPLICATION ROUTES
import productRoutes from './routes/productRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import helmet from 'helmet'; // Security middleware, protects against common vulnerabilities, Cross-Site Scripting (XSS), Clickjacking, MIME sniffing

dotenv.config();
connectDB();

const app = express();
app.use(helmet()); // Security middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PRODTUCT ROUTES
app.use('/api/products', productRoutes);

// ADMIN ROUTES
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
