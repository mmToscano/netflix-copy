import styles from "./Navbar.module.css"

/*
    <div className={styles.divDaImagemDeFundo}>
        <Navbar/>
        <MovieInfo/>
    <div/>
*/

function Navbar() {
    return(
        <div className={styles.principal}>
            <button>Netflix</button>
            <div className={styles.selectionArea}>
                <button>Início</button>
                <button>Séries</button>
                <button>Filmes</button>
                <button>Bombando</button>
                <button>Minha lista</button>
                <button>Navegar por idiomas</button>
            </div>
            <div className={styles.configArea}>
                <button>search</button>
                <button>Infantil</button>
                <button>alarme</button>
                <button>foto</button>
                <button>seta</button>
            </div>
        </div>
    )
}

export default Navbar;