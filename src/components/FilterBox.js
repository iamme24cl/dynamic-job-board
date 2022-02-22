import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'


const FilterBox = (props) => {
  const [filter, setFilter] = useState('');

  const styles = {
    margin: '20px 0 10px 10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }

  const inputStyles = {
    width: '173PX',
    padding: '11px 9px 11px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    borderRadius: '50px',
  }

  const iconStyles = {
    padding: '6px',
    borderRadius: '100%',
    position: 'absolute',
    left: '160px',
    bottom: '6px',
    cursor: 'pointer',

  }

  const filterStyles = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '-10px 0px 13px -7px ',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '800',
    border: 'none'
  }
 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.handleFilters(filter);
      props.filterJobs();
      setFilter("");
    }
  }

  const handleClick = () => {
    props.handleFilters(filter);
    props.filterJobs();
    setFilter("");
  }

  const handleOnBlur = () => {
    setFilter("");
  }

  const handleClearFilter = () => {
    props.fetchJobs();
    props.handleClearFilters();
  }
  
  return (
    <div className='filter-box' style={styles}>
      <input
        className='filter-input'
        style={inputStyles} 
        placeholder="Add Filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        onKeyPress={handleKeyPress}
        onFocus={() => props.handleShowFiltersList()}
        onBlur={handleOnBlur}
      >
      </input>
      <span onClick={handleClick} className='add-filter-btn' style={iconStyles}><FontAwesomeIcon  icon={ faAdd } /></span>
      <div>
        {props.filters.map(filter => {
          return <span className='filter-tags'  style={filterStyles} key={filter}>{filter}</span>;
        })}
        {props.filters.length > 0 && <span onClick={handleClearFilter} className='clear-btn'>Clear {props.jobs.length} results</span>}
      </div>
    </div>
  );
}

export default FilterBox;