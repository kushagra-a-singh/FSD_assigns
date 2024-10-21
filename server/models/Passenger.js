import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
  passenger_name: { type: String, required: true },
  from_location: { type: String, required: true },
  to_location: { type: String, required: true },
  departure_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  phone_number: { type: String, unique: true, required: true },
  email_id: { type: String, required: true },
});

const Passenger = mongoose.model('Passenger', passengerSchema);

export default Passenger;
