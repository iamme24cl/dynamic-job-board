const JobTitle = (props) => {
  const titleStyles = {
    padding: '20px 0',
  }
  
  const locationStyles = {
    backgroundColor: 'rgb(221, 221, 221)',
    marginTop: '5px',
    padding: '3px 6px',
    color: 'black',
    borderRadius: '5px',
    maxWidth: '120px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
  }

  const positionStyles = {
    maxWidth: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }

  const location = props.job.location && props.job.location.split("/").join(",");

  return (
    <div style={{titleStyles}}>
      <p>{props.job.company}</p>
      <p style={positionStyles}>{props.job.position}</p>
      {location && <p style={locationStyles}>{location}</p>}
    </div>
  );
}

export default JobTitle;