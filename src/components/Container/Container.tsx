import styles from "./Container.module.scss"
import React, {FC} from "react"

type ContainerProps = {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}

export default Container