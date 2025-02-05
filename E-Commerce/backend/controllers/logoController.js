const Logo = require('../models/logoModels.js');

// Save logo
const savelogo = async (req, res) => {
    try {
        const { logoname } = req.body;
        const logoImage = req.file ? req.file.filename : null;

        // Validation: Both Logoname and logoImage are required
        if (!logoname || !logoImage) {
            return res.status(400).json({ message: 'logo name and image are required' });
        }

        // Create a new logo object and save it to the database
        const logo = new Logo({ logoname: logoname, logoImage: logoImage });
        await logo.save();

        // Respond with a success message and the saved logo data
        res.status(201).json({ message: 'logo saved successfully', logo });
    } catch (error) {
        console.error('Error saving logo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all logo
const getLogo = async (req, res) => {
    try {
        const logos = await Logo.find();
        res.status(200).json({ message: 'logo fetched successfully', logos });
    } catch (error) {
        console.error('Error fetching logo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { savelogo, getLogo };
