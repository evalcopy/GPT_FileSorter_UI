import React, { useState } from 'react';
import { useSession } from '../contexts/SessionContext.jsx';
import { useFileStructure } from '../contexts/FileStructureContext.jsx';
import '../styles/styles.css'; // ✅ Import global styles

const SessionPreferences = ({ close }) => {
  console.log("useFileStructure:", useFileStructure); // ✅ Debugging the hook

  const { sessionName, startSession } = useSession(); // ✅ Use startSession to update the name
  const { loadJson } = useFileStructure();
  
  console.log("loadJson function from useFileStructure:", loadJson); // ✅ Debugging function existence
  
  const [newSessionName, setNewSessionName] = useState(sessionName);

  const handleSave = () => {
    if (newSessionName.trim() !== "") {
      startSession(newSessionName); // ✅ Update session name
      close(); // ✅ Close the panel
    }
  };

  const handlePurgeMemory = () => {
    loadJson(null); // ✅ Clears loaded JSON data
    close();
  };

  return (
    <div className="session-preferences">
      <h3>Session Preferences</h3>
      <label>
        Session Name:
        <input 
          type="text" 
          value={newSessionName} 
          onChange={(e) => setNewSessionName(e.target.value)} 
          className="session-input"
        />
      </label>
      <br />
      <button onClick={handleSave} className="primary-button">
        Save As
      </button>
      <button onClick={handlePurgeMemory} className="danger-button">
        Purge Memory
      </button>
      <button onClick={close} className="secondary-button">
        Close
      </button>
    </div>
  );
};

export default SessionPreferences;
