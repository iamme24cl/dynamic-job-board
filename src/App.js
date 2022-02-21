import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import FilterBox from './components/FilterBox';
import './App.css';

function App() {
  const [jobs, setJobs] = React.useState([]);
  
  const fetchJobs = async () => {
    try {
      const response = await fetch("https://remoteok.com/api");
      const jsonData = await response.json();
      const data = jsonData.slice(1);
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  React.useEffect(() => {
    fetchJobs();
  }, []);
  
  
  const searchJobs = async (tag) => {
    try {
      const response = await fetch(`https://remoteok.com/api?tag=${tag}`);
      const jsonData = await response.json();
      const data = jsonData.slice(1);
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <Header
        searchJobs={searchJobs}
      />
      <FilterBox />
      <JobList jobs={jobs} />
    </div>
  )
}

export default App;
