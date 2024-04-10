import React, {useState} from 'react';

import styles from "./Slider.module.css"
import MovieIcon from "./MovieIcon";

import avancarIcon from "../imgs/avancarMovieIcon.png"



function Slider({movies}) {
    
    const [showCurrently, setShowCurrently] = useState(5);

    function toggleCarousel(type) {

        if(type === 'avancar'){
            if(!(showCurrently == movies.length)){
                setShowCurrently(showCurrently+5)
            }else{
                setShowCurrently(5)
            }
            
        }

        if(type === 'voltar') {
            if(!(showCurrently == 5)){
                setShowCurrently(showCurrently-5)
            }else{
                setShowCurrently(movies.length)
            }
            
        }
    }



    return(
        <div className={styles.principal}>
            <h1>Séries</h1>
            <div className={styles.carousel}>
                <div className={styles.toggleButton} id='voltar' onClick={() => toggleCarousel('voltar')}>
                    <img src={avancarIcon} className={styles.voltar} />
                </div>
                <div className={styles.slider}>
                    {movies &&
                        movies.slice(showCurrently-5, showCurrently).map((movie) => (
                            <MovieIcon movie={movie}/>
                        ))
                    }
                </div>
                <div className={styles.toggleButton} id='avancar' onClick={() => toggleCarousel('avancar')}>
                    <img src={avancarIcon} />
                </div>
            </div>
            
        </div>
    )
}

export default Slider;