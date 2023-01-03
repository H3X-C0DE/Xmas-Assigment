import React, { useState, useEffect } from "react";

function FireButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <div>
      <button className="fire-button" onClick={() => setVisible(true)}>
        Fire Rockets
      </button>
      {visible && (
        <div id="firework-container">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      )}
    </div>
  );
}

export default FireButton;
