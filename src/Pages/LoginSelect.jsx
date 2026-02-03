import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import bgVideo from "../assets/bg.mp4/bgvideo.mp4";
import leftVideo from "../assets/bg.mp4/register.mp4";

function LoginSelect() {
  const navigate = useNavigate();

  // Set global background video for all pages
  useEffect(() => {
    // Add global video to the root of the app
    const existingVideo = document.querySelector('.global-video-bg');
    if (!existingVideo) {
      const video = document.createElement('video');
      video.className = 'global-video-bg';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      
      const source = document.createElement('source');
      source.src = bgVideo;
      source.type = 'video/mp4';
      video.appendChild(source);
      
      const overlay = document.createElement('div');
      overlay.className = 'global-video-overlay';
      
      document.body.appendChild(video);
      document.body.appendChild(overlay);
    }
  }, []);

  return (
    <>
      {/* Page content */}
      <div className="page">
        <div className="combined-card">
          {/* Left Side - Video */}
          <div className="video-side">
            <video 
              autoPlay 
              muted 
              loop 
            >
              <source src={leftVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Side - Glassmorphism Form */}
          <div className="form-side">
            <h2>Login As</h2>

            <button 
              className="option-button"
              onClick={() => navigate("/login-student")}
            >
              Student
            </button>

            <button 
              className="option-button"
              onClick={() => navigate("/login-admin")}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSelect;