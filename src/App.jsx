import React from 'react';
import { useIdleTimer } from 'react-idle-timer';

function App() {
  const handleOnIdle = () => {
    // Perform actions when the user becomes idle
    console.log('User is idle');
  };

  const handleOnActive = () => {
    // Perform actions when the user becomes active again
    console.log('User is active');
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 5, // 5 minutes in milliseconds
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 500,
  });

  return (
    <div>
      <h1>Your App</h1>

      {/* Display remaining time */}
      <p>Remaining Time: {getRemainingTime()}</p>

      {/* Display last active time */}
      <p>Last Active Time: {new Date(getLastActiveTime()).toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
