
import React from 'react';
import './LeftSidebar.css'; // Import the CSS file

function LeftSidebar() {
  return (
    
      <div className="left-sidebar">
        
        <ul className="menu-items">
        <button className="write-post-button">
          <span className="fas fa-pencil-alt"></span> Write Post
        </button>
          
            <span className="fas fa-bolt"></span> Post Generator
          
          
            <span className="fas fa-lightbulb"></span> Ideas Generator
          
          
            <span className="fas fa-images"></span> Carousel Maker
          
          
            <span className="fas fa-newspaper"></span> Posts
          
          
            <span className="fas fa-chart-line"></span> Content Inspiration
          
          
            <span className="fas fa-user-clock"></span> Posts for You
          
          
            <span className="fas fa-calendar-alt"></span> Schedule
          
        </ul>
        <div className="preferences">
          <ul>
             <span className="fas fa-comment-dots"></span> Preferences
              <span className="fas fa-comment-dots"></span> Feature Request
            
          </ul>
        </div>
        <div className="word-count">
          <p>Words generated <i className="fas fa-info-circle"></i></p>
          <progress value="1.25" max="50"></progress>
          <p>1.25k / 50k</p>
          <p>Monthly usage resets in 29 days</p>
          <button className="upgrade-plan-button">
          <span className="fas fa-bolt"></span> Upgrade Plan
        </button>
        </div>
        
      </div>
    
  );
}

export default LeftSidebar;