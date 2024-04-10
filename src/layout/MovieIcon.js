import styles from "./MovieIcon.module.css"

import defaultImg from "../imgs/imagemIlustrativa.png"

function MovieIcon({movie, buttonState}) {
    return(
        <div className={styles.principal}>
            <img src={defaultImg}/>
            <h1>{movie.name}</h1>
        </div>
    )
}

export default MovieIcon;