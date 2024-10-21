import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightBooking = () => {
    const [passengers, setPassengers] = useState([]);
    const [formData, setFormData] = useState({
        passenger_name: '',
        from_location: '',
        to_location: '',
        departure_date: '',
        arrival_date: '',
        phone_number: '',
        email_id: '',
    });
    const [message, setMessage] = useState('');

    // Fetch passenger details
    useEffect(() => {
        fetchPassengers();
    }, []);

    const fetchPassengers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/passengers');
            setPassengers(response.data);
        } catch (error) {
            console.error('Error fetching passengers:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/passengers', formData);
            setMessage(response.data.message);
            fetchPassengers();
            setFormData({
                passenger_name: '',
                from_location: '',
                to_location: '',
                departure_date: '',
                arrival_date: '',
                phone_number: '',
                email_id: '',
            });
        } catch (error) {
            console.error('Error adding passenger:', error);
        }
    };

    const handleDelete = async (phone_number) => {
        try {
            await axios.delete(`http://localhost:5000/api/passengers/${phone_number}`);
            fetchPassengers();
            setMessage('Passenger deleted successfully');
        } catch (error) {
            console.error('Error deleting passenger:', error);
        }
    };

    return (
        <div>
            <h1>Flight Booking Management System</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="passenger_name" placeholder="Passenger Name" value={formData.passenger_name} onChange={handleChange} required />
                <input type="text" name="from_location" placeholder="From" value={formData.from_location} onChange={handleChange} required />
                <input type="text" name="to_location" placeholder="To" value={formData.to_location} onChange={handleChange} required />
                <input type="date" name="departure_date" value={formData.departure_date} onChange={handleChange} required />
                <input type="date" name="arrival_date" value={formData.arrival_date} onChange={handleChange} required />
                <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
                <input type="email" name="email_id" placeholder="Email ID" value={formData.email_id} onChange={handleChange} required />
                <button type="submit">Add Passenger</button>
            </form>

            <h2>Passenger List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Departure Date</th>
                        <th>Arrival Date</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers.map((passenger) => (
                        <tr key={passenger.phone_number}>
                            <td>{passenger.passenger_name}</td>
                            <td>{passenger.from_location}</td>
                            <td>{passenger.to_location}</td>
                            <td>{passenger.departure_date}</td>
                            <td>{passenger.arrival_date}</td>
                            <td>{passenger.phone_number}</td>
                            <td>{passenger.email_id}</td>
                            <td>
                                <button onClick={() => handleDelete(passenger.phone_number)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightBooking;
