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
    position: 'relative'
  }

  const tags = Array.isArray(props.job.tags) ? props.job.tags : Object.values(props.job.tags);

  return (
    <>
      <div 
        style={styles} 
        className={`job ${randomColor}`}
        onMouseEnter={() => setShowApplyButton(true)}
        onMouseLeave={() => setShowApplyButton(false)}>
        <Logo job={props.job} />
        <a href={`${props.job.apply_url}`} target="_blank" rel="noreferrer">
          <JobTitle job={props.job} />
          </a>
        <JobTags tags={tags} />
        {showApplyButton && <ApplyButton url={props.job.apply_url} />}
      </div>
    </>
  );
}

export default Job;