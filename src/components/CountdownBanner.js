import React, { useEffect, useState } from "react";
import "./Offers.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 hours from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-banner">
      <h2>⚡ Mega Sale Ends In ⚡</h2>
      <div className="timer">
        <span>{timeLeft.hours.toString().padStart(2, "0")}h</span> :
        <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span> :
        <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
      </div>
     <Button as={Link} to="/dining/restaurant2" variant="danger" className="event-button">
                  Shop Now
                </Button>
    </div>
  );
};

export default CountdownBanner;