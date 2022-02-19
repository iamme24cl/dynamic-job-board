const JobTags = (props) => {
  const styles = {
    width: '35%',
    marginLeft: '50px',
    display: 'flex',
    justifyContent: 'space-around'
  }

  const tagStyles = {
    border: '1px solid',
    padding: '5px 8px',
    borderRadius: '12px'
  }

  const tags = props.tags.slice(0, 3)

  return (
    <div style={styles}>
      {tags.map(tag => {
        return <span className="lg-screens-only" style={tagStyles}>{tag}</span>
      })}
    </div>
  );
}

export default JobTags;