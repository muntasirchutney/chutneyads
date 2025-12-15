'use client';

import { useEffect, useState } from 'react';
import '@/styles/preloader.css';

export const Preloader = () => {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fading out after mount
    setMounted(true);

    const timer = setTimeout(() => {
      setHidden(true);
    }, 600); // Wait for potential fade out transition or min display time

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div 
      id="global-preloader" 
      className={`preloader-overlay ${mounted ? 'preloader-hidden' : ''}`}
    >
      <div className="preloader-card">
        <div className="flame-icon">
          <div className="flame-container">
            <div className="flame-block flame-red bottom-center"></div>
            <div className="flame-block flame-orange bottom-left"></div>
            <div className="flame-block flame-red bottom-center-2"></div>
            <div className="flame-block flame-red bottom-right"></div>
            <div className="flame-block flame-yellow third-left"></div>
            <div className="flame-block flame-orange third-center"></div>
            <div className="flame-block flame-red third-right"></div>
            <div className="flame-block flame-yellow fourth-center"></div>
            <div className="flame-block flame-orange fourth-right"></div>
            <div className="flame-block flame-yellow top-right"></div>
          </div>
        </div>
        <img src="/logo-text.svg" alt="Chutney Ads" className="preloader-logo" />
      </div>
    </div>
  );
};
