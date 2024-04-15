import React, {useState} from 'react'
import styles from "./MovieIcon.module.css"

import MovieBigCard from "./MovieBigCard"

function MovieIcon({movie}) {

    const [showCard, setShowCard] = useState(false);

    return(
        <div className={styles.principal} onMouseEnter={() => setShowCard(true)} onMouseLeave={() => setShowCard(false)}>
            <img src={movie.src}/>
            {showCard &&
                <MovieBigCard src={movie.src}/>
            }
        </div>
    )
}

export default MovieIcon;