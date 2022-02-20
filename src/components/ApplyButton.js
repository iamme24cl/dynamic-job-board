
const ApplyButton = (props) => {

  const styles = {
    backgroundColor: 'rgb(221, 221, 221)',
    fontSize: '16px',
    position: 'absolute',
    right: '20px',
    padding: '15px 50px',
    fontWeight: '800',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: 'black',
  }

  return (
    <>
      <a href={`${props.url}`} target="_blank" rel="noreferrer" className="lg-screens-only" style={styles}>Apply</a>
    </>
  );
}

export default ApplyButton;