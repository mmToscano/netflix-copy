import styles from "./Slider.module.css"

const movies = [{id: 0, name: "mindHunter"}, {id: 1, name: "irmão de guerra"}, {id: 2, name: "silent hill"},
{id: 3, name: "HxH"}, {id: 4, name: "One Piece"}, {id: 5, name: "anônimo"}, {id: 6, name: "hand of god"}];

function Slider() {
    return(
        <div className={styles.principal}>
            <h1>Séries</h1>
            <div className={styles.slider}>
                
            </div>
        </div>
    )
}

export default Slider;