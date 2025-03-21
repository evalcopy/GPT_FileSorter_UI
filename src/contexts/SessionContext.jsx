// Session Context - Manages session state
import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionName, setSessionName] = useState('');
  const [sessionStarted, setSessionStarted] = useState(false);

  const startSession = (name) => {
    setSessionName(name);
    setSessionStarted(true);
  };

  const updateSessionName = (newName) => {
    setSessionName(newName); // ✅ Allows renaming session without restarting
  };

  return (
    <SessionContext.Provider value={{ sessionName, sessionStarted, startSession, updateSessionName }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
