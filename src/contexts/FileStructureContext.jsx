// File Structure Context - Manages file hierarchy state
import React, { createContext, useContext, useState } from 'react';

const FileStructureContext = createContext();

export const FileStructureProvider = ({ children }) => {
  const [fileStructure, setFileStructure] = useState(null);

  const loadJson = (jsonData) => {
    console.log("Updating fileStructure state:", jsonData); // ✅ Debugging JSON update
    setFileStructure(jsonData);
  };

  return (
    <FileStructureContext.Provider value={{ fileStructure, loadJson }}>
      {children}
    </FileStructureContext.Provider>
  );
};

export const useFileStructure = () => useContext(FileStructureContext);
