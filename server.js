// // server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './db.js';
// import Contact from './Contact.js';

// dotenv.config();

// const app = express();

// app.use(express.json());

// connectDB();

// app.post('/api/contact', async (req, res) => {
//     const { name, email, phone, message } = req.body;

//     if (!name || !email || !phone || !message) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     try {
//         const newContact = new Contact({
//             name,
//             email,
//             phone,
//             message
//         });

//         await newContact.save();
//         res.status(201).json({ message: 'Contact saved successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors middleware
import connectDB from './db.js';
import Contact from './Contact.js';

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

connectDB();

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
