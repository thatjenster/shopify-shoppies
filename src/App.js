import React, { useState } from 'react'
import axios from 'axios'
import style from './Styles/styles.css'
import SearchBar from './Components/SearchBar'
import Popup from './Components/Popup'
import Dashboard from './Components/Dashboard'
import 'font-awesome/css/font-awesome.min.css'
import Nominate from './Components/Nominate'

function App() {
  const [state, setState] = useState({
    content: "",
    results: [],
    favourites: [],
    choices: {}
  });
  const apikey = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apikey + "&s=" + state.content).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let content = e.target.value;

    setState(prevState => {
      return { ...prevState, content: content }
    });
  }

  const openPopup = id => {
    axios(apikey + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, choices: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, choices: {} }
    });
  }

  const addFavourite = id => {
      axios(apikey + "&i=" + id).then(({ data }) => {
      let result = data;
        let tempArray = state.favourites;
        tempArray.push(result);

      setState(prevState => {

        return { ...prevState, favourites: tempArray}
      });
    });
    }

  const removeFavourties = (index) => {
    const favourites = this.state.favourites;
    favourites.splice(index, 1);
    this.setState({ favourites });
  }


  return (
    <div className="App">
      <header>

        <div className="nomination" onClick={openPopup}>
        <i className="fa fa-trophy" aria-hidden="true"></i>
        Nominations
        </div>

        <Nominate title="Show Favourites" closePopup={closePopup} favourites={state.favourites} removeFavourties={removeFavourties}/>

        <h1>The Shoppies:</h1>
        <h3>Movie awards for Entrepreneurs</h3>
      </header>

      <main>
        <SearchBar handleInput={handleInput} search={search} />

        <Dashboard results={state.results} openPopup={openPopup} />

        {(typeof state.choices.Title != "undefined") ? <Popup choices={state.choices} closePopup={closePopup} addFavourite={addFavourite}/> : false}
      </main>

    </div>
  );
}

export default App
