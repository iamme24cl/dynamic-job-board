const FilterList = (props) => {
  const styles = {
    backgroundColor: '#fff',
    fontSize: '16px',
    fontWeight: '800',
    padding: '7px',
    width: '336px',
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
    <div onClick={handleClick} id="filter-list" style={styles}>
      <div id="engineer">🤓 Engineer (909)</div>
      <div id="senior">👵 Senior (698)</div>
      <div id="developer">🤓 Developer (594)</div>
      <div id="executive">💼 Executive (490)</div>
      <div id="golang">🐀 Golang (334)</div>
      <div id="backend">🍑 Backend (264)</div>
      <div id="full stack">🥞 Full Stack (155)</div>
      <div id="front end">🎨 Front End (124)</div>
      <div id="product designer">📦 Product Designer (110)</div>
    </div>
  );
}

export default FilterList;

