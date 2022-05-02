import styles from './Loader.module.scss'
import React from "react"

const Loader = () => {
    return (
        <div className={styles.LoaderWrapper}>
            <div className={styles.Loader}>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Loader