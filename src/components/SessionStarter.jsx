// Session Starter Component - Handles user session input
import React, { useState } from 'react';
import { useSession } from '../contexts/SessionContext';
import '../styles/styles.css'; // ✅ Import global styles

const SessionStarter = () => {
  const { sessionStarted, startSession } = useSession();
  const [inputValue, setInputValue] = useState("");

  if (sessionStarted) return null; // ✅ Hide input once session starts

  const handleStart = () => {
    if (inputValue.trim() !== "") {
      startSession(inputValue.trim());
    }
  };

  return (
    <div className="session-starter">
      <h3>Name Your Session</h3>
      <input 
        id="sessionName" 
        name="sessionName" 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter session name..." 
        className="session-input"
      />
      <button onClick={handleStart} className="primary-button">
        Start
      </button>
    </div>
  );
};

export default SessionStarter;
