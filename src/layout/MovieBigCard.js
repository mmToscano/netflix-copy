import styles from "./MovieBigCard.module.css"

import React, {useState} from 'react'

import avancar from "../imgs/avancar.png"
import plus from "../imgs/plus.png"
import like from "../imgs/like.png"
import downArrow from "../imgs/downArrow.png"
import rating14 from "../imgs/rating14.webp"
import ThreeLikeButton from "./ThreeLikeButton"

function MovieBigCard({src}) {

    const [showLikes, setShowLikes] = useState(false);


    return(
        <div className={styles.principal}>
            <img src={src}/>
            <div className={styles.info}>
                <div className={styles.buttonArea}>
                    <button><img src={avancar}/></button>
                    <button><img src={plus}/></button>
                    <button onMouseEnter={() => setShowLikes(true)} className={styles.likeButton} onMouseLeave={() => setShowLikes(false)}>
                        <img src={like}/>
                        {showLikes &&
                            <ThreeLikeButton/>
                        }
                    </button>
                    <button><img src={downArrow}/></button>
                </div>
                <div className={styles.middleInfoArea}>
                    <h3>98% relevante</h3>
                    <img src={rating14}/>
                    <h3>2h 13min</h3>
                </div>
                <div className={styles.bottomInfoArea}>
                    <h3>Complexos</h3>
                    <div className={styles.type}><div></div><h3>Psicológico</h3></div>
                    <div className={styles.type}><div></div><h3>De roer as unhas</h3></div>
                </div>
            </div>
        </div>
    )
}

export default MovieBigCard;