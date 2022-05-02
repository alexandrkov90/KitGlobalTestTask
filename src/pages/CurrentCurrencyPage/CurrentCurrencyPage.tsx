import React from "react"
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/Typography/PageTitle/PageTitle";
import CurrencySection from "../../components/CurrencySection/CurrencySection";

const CurrentCurrencyPage = () => {
    const metaData = {
        metaTitle: "Конвертация валют",
        metaDescription: "Описание для страницы конвертации валют"
    }
    const pageTitle = "Конвертация валют"

    return (
        <Layout
            {...metaData}
            className={'currencyPage'}
        >
            <PageTitle title={pageTitle}/>
            <CurrencySection/>
        </Layout>
    )
}

export default CurrentCurrencyPage