import { useEffect, useState } from 'react';
import { PlaneTakeoff } from 'lucide-react';
import './LoadingScreen.css';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onDone, 600);
        }, 300);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onDone]);

  const loaderClass = fadeOut ? 'loader loader--fade' : 'loader';

  return (
    <div
      className={loaderClass}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading Relowings"
    >
      <div className="loader__bg" aria-hidden="true">
        <div className="loader__blob loader__blob--1" />
        <div className="loader__blob loader__blob--2" />
        <div className="loader__grid" />
      </div>

      <div className="loader__content">
        <div className="loader__logo">
          <img
            src="https://relowings.com/images/top-logo.png"
            alt="Relowings Logo"
            className="navbar__logo-image"
            loading="eager"
          />
        </div>

        {/* Pet photo strip instead of single emoji */}
        <div className="loader__pets" aria-hidden="true">
          <div className="loader__pet-img">
            <img src="https://i.pinimg.com/originals/33/b2/60/33b260046b2c8bc94c1dbc84c03c0cef.png" alt="Dog" loading="eager" />
          </div>
          <div className="loader__pet-img loader__pet-img--center">
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=90&h=90&fit=crop&auto=format&q=60" alt="Happy pet" loading="eager" />
          </div>
          <div className="loader__pet-img">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=70&h=70&fit=crop&auto=format&q=60" alt="Cat" loading="eager" />
          </div>
        </div>

        <p className="loader__tagline">Your pet's safe journey starts here</p>

        <div className="loader__progress-wrap">
          <div className="loader__progress-bar">
            <div className="loader__progress-fill" style={{ width: progress + '%' }} />
          </div>
          <span className="loader__progress-pct">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
