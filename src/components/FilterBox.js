import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'


const FilterBox = (props) => {
  const [filter, setFilter] = useState('');

  const styles = {
    margin: '20px 0 10px 10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
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
    cursor: 'pointer'
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
    props.handleCloseFiltersList();
  }
  
  return (
    <div style={styles}>
      <input
        className='filter-input'
        style={inputStyles} 
        placeholder="Add Filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        onKeyPress={handleKeyPress}
        onFocus={() => props.handleShowFiltersList()}
        onBlur={handleOnBlur}
      />
      <span onClick={handleClick} className='add-filter-btn' style={iconStyles}><FontAwesomeIcon  icon={ faAdd } /></span>
      {props.filters.map(filter => {
        return <span key={filter}>{filter}</span>;
      })}
    </div>
  );
}

export default FilterBox;