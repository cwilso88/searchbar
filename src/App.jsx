import React, { useState } from 'react'
import { books } from "./bookshelf"
import { names } from "./namelist"
import Books from './features/Books';
import Search from './features/Search';
import Names from './features/name_list/Names'
import Searchbar from './features/name_list/Searchbar'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const [searchName, setSearchName] = useState("");
  const handleNameInputChange = (e) => {
    setSearchName(e.target.value);
  }
  const filteredBooks = books.filter((book) => {
    return book.name.includes(searchTerm);
  });
  const filteredNames = names.filter((name) => {
    return name.name.includes(searchName);
  })


  return (
    <section>
      <Search name="search" onSearch={handleInputChange}/>
      <Books books={filteredBooks}/>

      <div>
        <Searchbar name="search" onSearch={handleNameInputChange}/>
        <Names names={filteredNames}/>
      </div>
    </section>
  );
}

export default App;
