import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'


const FilterBox = (props) => {
  const [filters, setFilters] = useState([]);

  const styles = {
    margin: '20px 0 10px 10px',
    position: 'relative'
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
 
  return (
    <div style={styles}>
      <input
        className='filter-input'
        style={inputStyles} 
        placeholder="Add Filter"
      />
      <span className='add-filter-btn' style={iconStyles}><FontAwesomeIcon  icon={ faAdd } /></span>
    </div>
  );
}

export default FilterBox;