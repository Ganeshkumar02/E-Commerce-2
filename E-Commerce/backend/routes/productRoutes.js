const express = require('express');
const multer = require('multer');
const path = require('path');
const { saveProduct, getProducts } = require('../controllers/productControllers');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure 'uploads/' folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ' ' + file.originalname); // Add a timestamp to file names
    },
});

const upload = multer({ storage });

const router = express.Router();

// Save product
router.post('/save', upload.single('productImage'), saveProduct);

// Get products
router.get('/get', getProducts);

// Export the router
module.exports = router;
