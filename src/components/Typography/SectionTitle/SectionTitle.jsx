import styles from "./SectionTitle.module.scss"
import React from "react"

const SectionTitle = ({title}) => {
    return <h2 className={styles.SectionTitle}>{title}</h2>
}

export default React.memo(SectionTitle)