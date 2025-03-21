// JSON Uploader Component - Handles drag-and-drop and click-to-upload JSON files
import React, { useRef } from 'react';
import { useFileStructure } from '../contexts/FileStructureContext';
import '../styles/styles.css'; // ✅ Import global styles

const JSONUploader = () => {
  const { fileStructure, loadJson } = useFileStructure();
  const fileInputRef = useRef(null);

  if (fileStructure) return null; // ✅ Hide after upload

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file); // ✅ Debugging file selection

    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          console.log("Parsed JSON:", jsonData); // ✅ Debugging parsed JSON
          loadJson(jsonData);
        } catch (err) {
          console.error("Invalid JSON file:", err);
        }
      };
      reader.readAsText(file);
    } else {
      console.warn("Invalid file type:", file?.type);
    }
  };

  return (
    <div className="json-uploader">
      <input type="file" accept=".json" onChange={handleFileUpload} ref={fileInputRef} className="file-input" />
      <button onClick={() => fileInputRef.current.click()} className="primary-button">Upload JSON</button>
    </div>
  );
};

export default JSONUploader;
