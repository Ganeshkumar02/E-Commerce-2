const Product = require('../models/productModels'); // Ensure this imports the Product model

// Save product
const saveProduct = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { productname, productPrice, productDescription, productCategory } = req.body;
        const productImage = req.file ? req.file.filename : null;

        // Validation: All fields are required
        // if (!productname || productImage || !productPrice || !productDescription || !productCategory) {
        //     return res.status(400).json({ message: 'Product name, image, price, description, and category are required' });
        // }

        // Create a new product object and save it to the database
        const product = new Product({
            productname,
            productImage,
            productPrice,
            productDescription,
            productCategory
        });

        await product.save();

        // Respond with a success message and the saved product data
        res.status(201).json({ message: 'Product saved successfully', product });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: 'Products fetched successfully', products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { saveProduct, getProducts };
