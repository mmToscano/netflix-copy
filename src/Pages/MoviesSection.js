import styles from "./MoviesSection.module.css"

function MoviesSection({children}) {
    return(
        <div className={styles.principal}>
            {children &&
                children.map((child) => (
                    child
                ))
            }
        </div>
        
    )
}

export default MoviesSection;