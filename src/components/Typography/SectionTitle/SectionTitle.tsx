import styles from "./SectionTitle.module.scss"
import React, {FC} from "react"

type SectionTitleProps = {
    title:string
}

const SectionTitle: FC<SectionTitleProps> = ({title}) => {
    return <h2 className={styles.SectionTitle}>{title}</h2>
}

export default React.memo(SectionTitle)