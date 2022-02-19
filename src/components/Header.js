import SearchBar from "./SearchBar";

function Header(props) {
  return (
    <div className="header">
      <div className="lg-screens-only">
        <h1>remote | ok</h1>
        <p>work anywhere, live anywhere #OpenSalaries</p>
      </div>
      <SearchBar  
        searchJobs={props.searchJobs}
      />
    </div>
  );
}

export default Header;