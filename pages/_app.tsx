// pages/_app.tsx
import React, { useEffect } from 'react';
import '../styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable text selection (handled in CSS)
    const preventTextSelection = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Warn if the user opens the console
    const devToolsOpen = () => {
      const element = new Image();
      Object.defineProperty(element, 'id', {
        get: function () {
          alert('DevTools is open!'); // You can customize this alert
        },
      });
      console.log(element);
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', preventTextSelection);

    // Check if dev tools is open every second
    const interval = setInterval(devToolsOpen, 1000);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', preventTextSelection);
      clearInterval(interval);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
