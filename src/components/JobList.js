import Job from "./Job";

function JobList(props) {
  const job = props.jobs.map(job => {
    return <Job key={job.id} job={job} />;
  })
  
  return (
    <div className="job-list">
      {job}
    </div>
  );
}

export default JobList;