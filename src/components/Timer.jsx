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
      // Set the target date and time to Christmas
      const targetDate = new Date(now.getFullYear(), 11, 24); // 24th of December
      // If the target date has already passed, set the target date to next year's Christmas
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
    <p>
      Christmas is in {days} days, {hours} hours, {minutes} minutes, and{" "}
      {seconds} seconds.
    </p>
  );
}

export default CountdownTimer;
