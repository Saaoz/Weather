import React, { useState } from 'react';

function CustomSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSearch(searchQuery);
  }

  return (
    <form className='search-bar' onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='Search here'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default CustomSearch;