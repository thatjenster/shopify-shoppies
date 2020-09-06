import React, { Component } from 'react'
import styles from './Styles/styles.css'
import SearchBar from './Components/SearchBar'

class App extends Component {
  render() {
  return (
    <div className="App">
      <header>
        <h1> The Shoppies: </h1>
        <h3> Movie awards for Entrepreneurs </h3>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  );
  }
}

export default App;
