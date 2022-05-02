import styles from "./PageTitle.module.scss"
import React, {FC} from "react"
import Container from "../../Container/Container";

type PageTitleProps = {
    title:string
}

const PageTitle: FC<PageTitleProps> = ({title}) => {
    return (
        <section className={styles.PageTitleWrapper}>
            <Container>
                <h1 className={styles.PageTitle}>{title}</h1>
            </Container>
        </section>
    )
}

export default React.memo(PageTitle)