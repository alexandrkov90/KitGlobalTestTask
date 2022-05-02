import React from "react"
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/Typography/PageTitle/PageTitle";
import CurrencyListSection from "../../components/CurrencyListSection/CurrencyListSection";

const CurrencyPage = () => {
    const metaData = {
        metaTitle: "Курс валют",
        metaDescription: "Описание для страницы курса валют"
    }
    const pageTitle = "Курс валют"

    return (
        <Layout {...metaData} >
            <PageTitle title={pageTitle}/>
            <CurrencyListSection/>
        </Layout>
    )
}

export default CurrencyPage