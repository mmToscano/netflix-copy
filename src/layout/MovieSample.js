import styles from "./MovieSample.module.css"

import rankingImg from "../imgs/top10.jpg";
import avancarImg from "../imgs/avancar.png";
import infoImg from "../imgs/info.png"

function movieSample() {

    var text = "Na década de 1950, um brasileiro comum desafia as autoridades e realiza cirurgias com o auxílio do espírito de um médico alemão da Primeira Guerra Mundial.";


    return(
        <div className={styles.principal}>
            <div className={styles.infoArea}>
                <h1>Predestinado</h1>
                <div className={styles.rankingArea}>
                    <img src={rankingImg}/>
                    <h3>Top 4 em filmes hoje</h3>
                </div>
                <h4>{text}</h4>
                <div className={styles.downArea}>
                    <div className={styles.buttonArea}>
                        <button><img src={avancarImg}/><h4>Assistir</h4></button>
                        <button><img src={infoImg}/><h4>Mais informações</h4></button>
                    </div>
                    <div className={styles.ageClassificationArea}>
                        <div>14</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default movieSample;