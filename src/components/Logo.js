function Logo(props) {
  const styles = {
    padding: '8px 0 8px 15px',
    width: '15%',
    maxWidth: '50px',
    overflow: 'hidden',
    marginRight: '25px'
  }

  const imgStyles = {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff!important',
    borderRadius: '100%'
  }

  return (
    <div style={styles} className="company-logo">
      {props.job.company_logo && <img style={imgStyles} src={props.job.company_logo} alt="company logo" />}
    </div>
  );
}

export default Logo;
