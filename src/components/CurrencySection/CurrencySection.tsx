import styles from "./CurrencySection.mdoule.scss"
import React, {FC} from "react"
import Container from "../Container/Container";
import SectionTitle from "../Typography/SectionTitle/SectionTitle";
import CurrencyExchange from "./CurrencyExchange/CurrencyExchange";

const CurrencySection: FC = () => {
    return (
        <section className={styles.Section}>
            <Container>
                <SectionTitle title={'Выберите валюты для конвертации'}/>
                <CurrencyExchange/>
            </Container>

        </section>
    )
}

export default CurrencySection