import Navbar from "./Pages/Navbar";
import MovieSample from "./layout/MovieSample";
import styles from "./App.module.css"
import Background from "./Pages/Background";


function App() {
  return (
    <div className={styles.app}>
      <Background children1={<Navbar/>} children2={<MovieSample/>}/>
      
      
    </div>
  );
}

export default App;
