import React, { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import FilterBox from './components/FilterBox';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [showFiltersList, setShowFiltersList] = useState(false);
  
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

  const filterJobs = async () => {
    const tags = filters.join(",")
    try {
      const response = await fetch(`https://remoteok.com/api?tags=${tags}`);
      const jsonData = await response.json();
      const data = jsonData.slice(1);
      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setShowFiltersList(false)
    }
  }

  const handleShowFiltersList = () => {
    setShowFiltersList(true);
  }
  
  const handleCloseFiltersList = () => {
    // setShowFiltersList(false);
  }

  const handleFilters = (val) => {
    let filtersCopy = [ ...filters ];
    filtersCopy.push(val);
    setFilters(filtersCopy);
  }

  return (
    <div>
      <Header
        searchJobs={searchJobs}
      />
      <FilterBox 
        handleShowFiltersList={handleShowFiltersList}  
        handleCloseFiltersList={handleCloseFiltersList}
        handleFilters={handleFilters}
        filterJobs={filterJobs}
        filters={filters}
      />
      {showFiltersList && <FilterList filterJobs={filterJobs} handleFilters={handleFilters} />}
      <JobList jobs={jobs} />
    </div>
  )
}

export default App;
