import Logo from "./Logo";

function Job(props) {
  const colors = ['white', 'blue', 'salmon', 'dark-blue', 'black', 'yellow', 'red', 'light-blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const styles = {
    height: '80px',
    maxHeight: '100px',
    border: '1px solid gray',
    marginBottom: '1px',
    display: 'flex',
    alignItems: 'center'
  }

  const titleStyle = {
    padding: '20px 0'
  }
  
  return (
    <div style={styles} className={`job ${randomColor}`}>
      <Logo job={props.job} />
      <div style={{titleStyle}}>
        <p>{props.job.company}</p>
        <p>{props.job.position}</p>
      </div>
    </div>
  );
}

export default Job;