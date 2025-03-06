import React, { useState } from 'react';
import './MyWork.css';
import arrow_icon from '../../assets/arrow_icon.svg'; // Ensure correct path
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  // Show only first 3 items initially
  const visibleWork = showMore ? mywork_data : mywork_data.slice(0, 3);

  return (
    <div id='portfolio' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {visibleWork.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={work.w_name} className="work-image" />
            <h2>{work.w_name}<p>WORK IN PROGRESS</p></h2>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mywork-showmore" onClick={() => setShowMore(!showMore)}>
        <p>{showMore ? "SHOW LESS" : "SHOW MORE"}</p>
        <img src={arrow_icon}  alt="arrow icon" />
      </div>
    </div>
  );
}

export default MyWork;
