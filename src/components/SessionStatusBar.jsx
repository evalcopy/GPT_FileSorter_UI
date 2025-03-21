// Session Status Bar Component - Displays current session name with Options button
import React, { useState } from 'react';
import { useSession } from '../contexts/SessionContext';
import SessionPreferences from './SessionPreferences';
import '../styles/styles.css'; // ✅ Import global styles

const SessionStatusBar = () => {
  const { sessionName } = useSession();
  const [isOptionsing, setIsOptionsing] = useState(false);

  return (
    <div className="session-status-bar">
      Current Session: {sessionName}
      <button 
        onClick={() => setIsOptionsing(!isOptionsing)} 
        className="secondary-button"
      >
        Options
      </button>
      {isOptionsing && <SessionPreferences close={() => setIsOptionsing(false)} />}
    </div>
  );
};

export default SessionStatusBar;
