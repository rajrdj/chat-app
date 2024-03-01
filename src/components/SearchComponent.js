import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAndSearchConversations } from '../actions/searchConversations';

const SearchComponent = () => {
 const [query, setQuery] = useState('');
 const dispatch = useDispatch();

 const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAndSearchConversations(query));
 };

 return (
    <div>
      <h2>Search Conversations</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search conversations..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
 );
};

export default SearchComponent;
