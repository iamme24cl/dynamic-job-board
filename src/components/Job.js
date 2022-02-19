import Logo from "./Logo";

function Job(props) {
  const colors = ['white', 'blue', 'salmon', 'dark-blue', 'black', 'yellow', 'red', 'light-blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div className={`job ${randomColor}`}>
      <Logo job={props.job} />
      <div className="job-title">
        <p>{props.job.company}</p>
        <p>{props.job.position}</p>
      </div>
    </div>
  );
}

export default Job;