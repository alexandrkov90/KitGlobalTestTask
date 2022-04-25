import styles from "./Container.module.scss"
import React from "react"

const Container = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}

export default Container