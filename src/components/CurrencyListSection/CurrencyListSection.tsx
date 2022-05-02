import styles from "./CurrencyListSection.module.scss"
import React, {useState} from "react"
import Container from "../Container/Container";
import SectionTitle from "../Typography/SectionTitle/SectionTitle";
import Select from "../UI/FormElements/Select/Select";
import CurrencyListItem from "../CurrencySection/CurrencyListItem/CurrencyListItem";
import CurrencyList from "./CurrencyList/CurrencyList";
import {currenciesList} from "../../globalVariables/variables";


const CurrencyListSection = () => {
    const [baseCurrency, setBaseCurrency] = useState('USD')


    return (
        <section>
            <Container>
                <SectionTitle title="Выберите валюту"/>
                <div className={styles.SelectWrapper}>
                    <Select title={baseCurrency}>
                        {currenciesList.map((title:string) => {
                            return (
                                <CurrencyListItem
                                    current={baseCurrency}
                                    title={title}
                                    handleClick={setBaseCurrency}
                                    key={title}
                                />
                            )
                        })}
                    </Select>
                </div>
                <CurrencyList baseCurrency={baseCurrency}/>
            </Container>
        </section>
    )
}

export default CurrencyListSection