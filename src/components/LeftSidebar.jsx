import React from 'react';
import './LeftSidebar.css'; // Import the CSS file

function LeftSidebar() {
  return (
    
      <div className="left-sidebar">
        <button className="write-post-button">
          <span className="fas fa-pencil-alt"></span> Write Post
        </button>
        <ul className="menu-items">
          <li>
            <span className="fas fa-bolt"></span> Post Generator
          </li>
          <li>
            <span className="fas fa-lightbulb"></span> Ideas Generator
          </li>
          <li>
            <span className="fas fa-images"></span> Carousel Maker
          </li>
          <li>
            <span className="fas fa-newspaper"></span> Posts
          </li>
          <li>
            <span className="fas fa-chart-line"></span> Content Inspiration
          </li>
          <li>
            <span className="fas fa-user-clock"></span> Posts for You
          </li>
          <li>
            <span className="fas fa-calendar-alt"></span> Schedule
          </li>
        </ul>
        <div className="preferences">
          <ul>
            <li>
              <span className="fas fa-comment-dots"></span> Preferences
            </li>
            <li>
              <span className="fas fa-comment-dots"></span> Feature Request
            </li>
          </ul>
        </div>
        <div className="word-count">
        <div className="word-count-info">
          <p>Words generated <i className="fas fa-info-circle"></i></p><p className="word-count-value">1.25k / 50k</p>
          
          </div>
          <progress value="1.25" max="50"></progress>
          <p>Monthly usage resets in 29 days</p>
          <br></br>
          <button className="upgrade-plan-button">
            <span className="fas fa-bolt"></span> Upgrade Plan
          </button>
        </div>
      </div>
    
  );
}

export default LeftSidebar;