// app.js
import express from 'express';
import mongoose from 'mongoose';
import Passenger from './models/Passenger.js';
import Contact from './models/Contact.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());

// Get all passengers
app.get('/api/passengers', async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching passengers' });
  }
});

// Add a passenger
app.post('/api/passengers', async (req, res) => {
  try {
    const newPassenger = new Passenger(req.body);
    await newPassenger.save();
    res.status(201).json({ message: 'Passenger added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding passenger', error });
  }
});

// Update a passenger
app.put('/api/passengers/:phone_number', async (req, res) => {
  try {
    const updatedPassenger = await Passenger.findOneAndUpdate(
      { phone_number: req.params.phone_number },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPassenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }
    res.json({ message: 'Passenger updated successfully', updatedPassenger });
  } catch (error) {
    res.status(400).json({ message: 'Error updating passenger', error });
  }
});

// Delete a passenger
app.delete('/api/passengers/:phone_number', async (req, res) => {
  try {
    await Passenger.deleteOne({ phone_number: req.params.phone_number });
    res.json({ message: 'Passenger deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting passenger', error });
  }
});

// Add a contact message
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Error sending message', details: error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
