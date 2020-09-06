import React, { useState } from 'react'
import styles from './Styles/styles.css'
import axios from 'axios'
import SearchBar from './Components/SearchBar'
import Dashboard from './Components/Dashboard'
import Popup from './Components/Popup'

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

  const openPopup = id => {
    axios(apikey + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, choice: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, choice: {} }
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
        <Dashboard results={state.results} openPopup={openPopup}/>

        {(typeof state.choice.Title != "undefined") ? <Popup choice={state.choice} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
