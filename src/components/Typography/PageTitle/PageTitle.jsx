import styles from "./PageTitle.module.scss"
import React from "react"
import Container from "../../Container/Container";

const PageTitle = ({title}) => {
    return (
        <section className={styles.PageTitleWrapper}>
            <Container>
                <h1 className={styles.PageTitle}>{title}</h1>
            </Container>
        </section>
    )
}

export default React.memo(PageTitle)