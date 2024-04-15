import styles from "./ThreeLikeButton.module.css"

import like from "../imgs/like.png"
import doubleLike from "../imgs/doubleIcon.png"

function ThreeLikeButton(){
    return(
        <div className={styles.principal}>
            <img src={like}/>
            <img src={like}/>
            <img src={doubleLike}/>
        </div>
    )
}

export default ThreeLikeButton;