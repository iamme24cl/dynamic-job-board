function Logo(props) {
  return (
    <div className="company-logo">
      {props.job.company_logo && <img class="logo" src={props.job.company_logo} alt="company logo" />}
    </div>
  );
}

export default Logo;
