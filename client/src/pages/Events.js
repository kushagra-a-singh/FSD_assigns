import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      title: "All New Rush",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      image: "path/to/event1-image.jpg"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      description: "Join us for an exciting 48-hour coding challenge!",
      image: "path/to/event2-image.jpg"
    },
    {
      id: 3,
      title: "AI Workshop",
      description: "Learn about the latest advancements in Artificial Intelligence.",
      image: "path/to/event3-image.jpg"
    }
  ];

  return (
    <div className="events">
      <header>
        <nav>
          <ul className="navbar">
            <li className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Upcoming Events</h1>
        <div className="event-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="btn">Learn More</Link>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Featured</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathon</Link></li>
              <li><Link to="/events">Seminars</Link></li>
              <li><Link to="/events">Workshops</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <ul>
              <li><a href="https://www.instagram.com/iris_mitwpu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 | I.R.I.S. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Events;