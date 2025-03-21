// Thumbnail Cache Context - Manages in-memory file previews
import React, { createContext, useContext, useState } from 'react';

const ThumbnailCacheContext = createContext();

export const ThumbnailCacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const getThumbnail = (key) => cache[key] || null;
  const setThumbnail = (key, value) => {
    setCache((prevCache) => ({ ...prevCache, [key]: value }));
  };

  return (
    <ThumbnailCacheContext.Provider value={{ getThumbnail, setThumbnail }}>
      {children}
    </ThumbnailCacheContext.Provider>
  );
};

export const useThumbnailCache = () => useContext(ThumbnailCacheContext);
