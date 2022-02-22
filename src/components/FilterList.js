import React from "react";

const FilterList = (props) => {
  const styles = {
    backgroundColor: '#fff',
    fontSize: '16px',
    fontWeight: '800',
    padding: '7px',
    width: '324px',
    borderRadius: '12px',
    boxShadow: '-10px 0px 13px -7px ',
    margin: '-9.5px 0 10px 10px',
    cursor: 'pointer'
  }

  const handleClick = (e) => {
    props.handleFilters(e.target.id);
    props.filterJobs();
  }

  return (
    <div className="filter-list" onMouseLeave={() => props.handleCloseFiltersList()} onClick={handleClick} id="filter-list" style={styles}>
      <div id="Engineer">🤓 Engineer (909)</div>
      <div id="Senior">👵 Senior (698)</div>
      <div id="Developer">🤓 Developer (594)</div>
      <div id="Executive">💼 Executive (490)</div>
      <div id="Golang">🐀 Golang (334)</div>
      <div id="Backend">🍑 Backend (264)</div>
      <div id="Full stack">🥞 Full Stack (155)</div>
      <div id="Front end">🎨 Front End (124)</div>
      <div id="Product designer">📦 Product Designer (110)</div>
    </div>
  );
}

export default FilterList;

