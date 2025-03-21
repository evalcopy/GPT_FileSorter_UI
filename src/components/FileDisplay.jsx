import React from 'react';
import { useFileStructure } from '../contexts/FileStructureContext.jsx';
import '../styles/styles.css'; // ✅ Import global styles

const FileDisplay = () => {
  const { fileStructure, loadJson } = useFileStructure();

  const handlePurge = () => {
    loadJson(null); // ✅ Clears the JSON data
  };

  return (
    <div className="file-display">
      {fileStructure && (
        <button onClick={handlePurge} className="danger-button">
          Purge Data
        </button>
      )}
      <h3>Uploaded JSON Data:</h3>
      {fileStructure ? (
        <pre className="json-preview">
          {JSON.stringify(fileStructure, null, 2)}
        </pre>
      ) : (
        <p>No file uploaded yet.</p>
      )}
    </div>
  );
};

export default FileDisplay;
