import styles from "./Background.module.css"

function Background({children1, children2}) {
    return(
        <div className={styles.principal}>
            {children1}
            {children2}
            oi
        </div>
    )
}

export default Background;