import styles from "./Navbar.module.css"

import React, {useState} from 'react'

import netflixIcon from "../imgs/netflixIcon.png"
import lupaIcon from "../imgs/lupa.png"
import sinoIcon from "../imgs/sino.png"
import setaIcon from "../imgs/seta.png"
import userIcon from "../imgs/userIcon.png"


/*
    <div className={styles.divDaImagemDeFundo}>
        <Navbar/>
        <MovieInfo/>
    <div/>
*/

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 10) { // Change 100 to the scroll position at which you want the change to occur
            setScrolled(true)
            } else {
            setScrolled(false)
            }
        };


        window.addEventListener('scroll', handleScroll);


    return(
        <div className={`${styles.principal} ${scrolled ? styles.scrolled : ''}`} id="principal">
            <button><img src={netflixIcon}/></button>
            <div className={styles.selectionArea}>
                <button>Início</button>
                <button>Séries</button>
                <button>Filmes</button>
                <button>Bombando</button>
                <button>Minha lista</button>
                <button>Navegar por idiomas</button>
            </div>
            <div className={styles.configArea}>
                <button><img src={lupaIcon}/></button>
                <button>Infantil</button>
                <button><img src={sinoIcon}/></button>
                <button><img src={userIcon} id={styles.userIcon}/></button>
                <button><img src={setaIcon} id={styles.seta}/></button>
            </div>
        </div>
    )


    }

    
export default Navbar;