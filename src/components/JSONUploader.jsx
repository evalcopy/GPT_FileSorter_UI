import React, { useRef } from 'react';
import { useFileStructure } from '../contexts/FileStructureContext';
import '../styles/styles.css';

const JSONUploader = () => {
  const { fileStructure, loadJson } = useFileStructure();
  const fileInputRef = useRef(null);

  if (fileStructure) return null;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          loadJson(jsonData);
        } catch (err) {
          console.error("Invalid JSON file:", err);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="json-uploader centered-container">
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        ref={fileInputRef}
        className="hidden-file-input"
      />
      <button onClick={() => fileInputRef.current.click()} className="primary-button">
        Upload JSON
      </button>
    </div>
  );
};

export default JSONUploader;
