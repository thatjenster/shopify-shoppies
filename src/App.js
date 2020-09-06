import React, { useState } from 'react'
import styles from './Styles/styles.css'
import axios from 'axios'
import SearchBar from './Components/SearchBar'
import Dashboard from './Components/Dashboard'

function App() {
  const [state, setState] = useState({
    content: '',
    results: [],
    choice: {}
  });

  const apikey = 'http://www.omdbapi.com/?i=tt3896198&apikey=29a0ab3b';

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apikey + "&s=" + state.content).then(({ data }) => {
        let results = data.Search;
        
        setState(prevState => {
          return { ...prevState, results: results}
        })
      });
    }
  }

  const handleInput = (e) => {
    let content = e.target.value;

    setState(prevState => {
      return { ...prevState, content: content}
    });
  }

  return (
    <div className="App">
      <header>
        <h1> The Shoppies: </h1>
        <h3> Movie awards for Entrepreneurs </h3>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search}/>
        <Dashboard results={state.results} />
      </main>
    </div>
  );
}

export default App;
