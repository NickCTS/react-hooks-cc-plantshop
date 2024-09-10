import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        placeholder="Type a name to search..." // Update placeholder here
        type="text"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
