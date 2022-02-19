import SearchBar from "./SearchBar";

function Header(props) {

  const headerStyles = {
    backgroundImage: "url('https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=1500,height=500,quality=75//assets/tropical-nomad.jpg')",
    width: '100%',
    height: '300px',
    backgroundPosition: 'center',
    backgroundColor: 'rgb(221, 221, 221)',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative'
  }

  const h1Styles = {
    paddingTop: '30px',
    fontFamily: "'Akaya Telivigala', cursive",
    fontSize: '36px'
  }

  return (
    <div style={headerStyles} className="header">
      <div className="lg-screens-only">
        <h1 style={h1Styles}>remote | ok</h1>
        <p>work anywhere, live anywhere #OpenSalaries</p>
      </div>
      <SearchBar  
        searchJobs={props.searchJobs}
      />
    </div>
  );
}

export default Header;