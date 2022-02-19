import Job from "./Job";

function JobList(props) {
  const job = props.jobs.map(job => {
    return <Job key={job.id} job={job} />;
  })

  const styles = {
    margin: '5px auto',
    width: '100%',
    maxWidth: '1100px'
  }
  
  return (
    <div style={styles}>
      {job}
    </div>
  );
}

export default JobList;