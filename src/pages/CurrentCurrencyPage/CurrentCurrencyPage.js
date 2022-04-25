import React from "react"
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/Typography/PageTitle/PageTitle";
import CurrencySection from "../../components/CurrencySection/CurrencySection";

const CurrentCurrencyPage = () => {

    return (
        <Layout metaTitle="Конвертация валют" metaDescription="Описание для страницы конвертации валют"
                className={'currencyPage'}>
            <PageTitle title={'Конвертация валют'}/>
            <CurrencySection/>
        </Layout>
    )
}

export default CurrentCurrencyPage