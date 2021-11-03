import React, { useState } from 'react'
import { books } from "./bookshelf"
import Books from './features/Books';
import Search from './features/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
