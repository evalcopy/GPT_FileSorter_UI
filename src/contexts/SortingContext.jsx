// Sorting Context - Manages file sorting state
import React, { createContext, useContext, useState } from 'react';

const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
  const [sortedStructure, setSortedStructure] = useState(null);

  return (
    <SortingContext.Provider value={{ sortedStructure, setSortedStructure }}>
      {children}
    </SortingContext.Provider>
  );
};

export const useSorting = () => useContext(SortingContext);
