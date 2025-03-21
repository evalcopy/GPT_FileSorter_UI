// UI Framework - Main UI Component
// Modularized for better maintainability

import React from 'react';
import { SessionProvider } from './contexts/SessionContext';
import { FileStructureProvider } from './contexts/FileStructureContext';
import { SortingProvider } from './contexts/SortingContext';
import { ThumbnailCacheProvider } from './contexts/ThumbnailCacheContext';
import SessionStatusBar from './components/SessionStatusBar';
import SessionStarter from './components/SessionStarter';
import JSONUploader from './components/JSONUploader';
import './styles/styles.css'; // ✅ Import global stylesheet

const UIFramework = () => {
  return (
    <FileStructureProvider> {/* ✅ Now wraps the entire app */}
      <SessionProvider>
        <SortingProvider> {/* ✅ Moved outside app-container for global access */}
          <ThumbnailCacheProvider> {/* ✅ Moved outside app-container for global access */}
            <SessionStatusBar />
            <div className="app-container"> {/* ✅ Only handles styling */}
              <SessionStarter />
              <h2>File Sorting UI</h2>
              <JSONUploader />
            </div>
          </ThumbnailCacheProvider>
        </SortingProvider>
      </SessionProvider>
    </FileStructureProvider>
  );
};

export default UIFramework;
