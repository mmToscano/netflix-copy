import React, {useEffect} from 'react'

import Navbar from "./Pages/Navbar";
import MovieSample from "./layout/MovieSample";
import styles from "./App.module.css"
import Background from "./Pages/Background";
import MoviesSection from "./Pages/MoviesSection";
import Slider from "./layout/Slider";

import movies from "./fakeDatabase/movies.js"


function App() {
  return (
    <div className={styles.app}>
      <Background children1={<Navbar/>} children2={<MovieSample/>}/>
      <MoviesSection>
        {movies &&
          movies.map((movie) => (
            <Slider movies={movie}/>
          ))
        }
        
      </MoviesSection>
      
    </div>
  );
}

export default App;
