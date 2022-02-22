import Job from "./Job";
import FilterBox from "./FilterBox";
import FilterList from "./FilterList";

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
      <FilterBox 
        fetchJobs={props.fetchJobs}
        handleClearFilters={props.handleClearFilters}
        handleShowFiltersList={props.handleShowFiltersList}  
        handleCloseFiltersList={props.handleCloseFiltersList}
        handleFilters={props.handleFilters}
        filterJobs={props.filterJobs}
        filters={props.filters}
        jobs={props.jobs} 
      />
      {props.showFiltersList && <FilterList filterJobs={props.filterJobs} handleFilters={props.handleFilters} handleCloseFiltersList={props.handleCloseFiltersList} />}
      {job}
    </div>
  );
}

export default JobList;