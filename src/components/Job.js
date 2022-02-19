import React, { useState } from 'react';
import Logo from "./Logo";
import JobTitle from "./JobTitle";
import JobTags from "./JobTags";
import ApplyButton from "./ApplyButton";

function Job(props) {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const colors = ['white', 'blue', 'salmon', 'dark-blue', 'black', 'yellow', 'red', 'light-blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const styles = {
    height: '80px',
    maxHeight: '110px',
    border: '1px solid gray',
    marginBottom: '1px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative'
  }

  return (
    <>
    <a href={`${props.job.apply_url}`} target="_blank">
      <div 
        style={styles} 
        className={`job ${randomColor}`}
        onMouseEnter={() => setShowApplyButton(true)}
        onMouseLeave={() => setShowApplyButton(false)}
      >
        <Logo job={props.job} />
        <JobTitle job={props.job} />
        <JobTags tags={props.job.tags} />
        {showApplyButton && <ApplyButton url={props.job.apply_url} />}
      </div>
    </a>  
    </>
  );
}

export default Job;