import styles from "./MoviesSection.module.css"

function MoviesSection(props) {
    return(
        <div className={styles.principal}>
            {props.children}  
        </div>
        
    )
}

export default MoviesSection;