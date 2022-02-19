import React from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.searchJobs(searchTerm);
      setSearchTerm("");
    }
  }
  
  return (
    <div className="search-bar"> 
      <input
        type="text"
        value={searchTerm}
        placeholder="Search...."  
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
}

export default SearchBar;