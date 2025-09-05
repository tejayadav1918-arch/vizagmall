import React from 'react'
import './Event.css'
import { useState } from 'react';


const Eventspage = () => {
   const [showForm, setShowForm] = useState(false);

  return (
    <div className="event-page">
      {/* Hero Banner */}
      <div className="event-hero">
        <h1>🎉 Upcoming Events</h1>
        <p>Stay tuned for exclusive fashion & lifestyle events</p>
      </div>

      {/* Event Cards */}
      <div className="event-section">
        <div className="event-card">
          <img
            src="https://images.unsplash.com/photo-1603122630570-7fd434d470d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion Show"
          />
          <div className="event-info">
            <h3>Fashion Show 2025</h3>
            <p>Experience the latest trends in fashion with top designers.</p>
           <a href="./Fashionshow"> <button>Join now</button> </a>
      
          </div>
        </div>

        <div className="event-card">
          <img
            src="https://www.mescotshoes.com/wp-content/uploads/2023/02/Shoe-Trade-Show-Footwear-Exhibition-Events-Calendar-in-2023.jpg"
            alt="Footwear Expo"
          />
          <div className="event-info">
            <h3>Footwear Expo</h3>
            <p>Explore the newest footwear collections and offers.</p>
           <a href='/Explore'> <button>Explore</button></a>
          </div>
        </div>

        <div className="event-card">
          <img
            src="https://dtjax.com/wp-content/uploads/2025/04/Jax-health-lifestyle-fest-May-3-2025-Jacksonville-Fl.jpg"
            alt="Lifestyle Fest"
          />
          <div className="event-info">
            <h3>Lifestyle Fest</h3>
            <p>Celebrate lifestyle products, workshops, and fun activities.</p>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventspage