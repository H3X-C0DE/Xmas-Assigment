import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current date and time
      const now = new Date();
      // Set the target year, month and day
      const targetDate = new Date(now.getFullYear(), 12, 1); // 1th of January
      // If the target date has already passed, set the target date to next year
      if (now > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      }
      // Calculate the difference between the target date and the current date
      const difference = targetDate - now;
      // Extract the number of days, hours, minutes, and seconds from the difference
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>New Year Countdown</h1>
      <div className="countdown-div">
        <span id="days">{days}d, </span>
        <span id="hours">{hours}h, </span>
        <span id="minutes">{minutes}m, </span>
        <span>{seconds}s.</span>
      </div>
    </>
  );
}

export default CountdownTimer;
