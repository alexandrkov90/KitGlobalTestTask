import React from "react"
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/Typography/PageTitle/PageTitle";
import CurrencyListSection from "../../components/CurrencyListSection/CurrencyListSection";

const CurrencyPage = () => {
    return (
        <Layout metaTitle="Курс валют" metaDescription="Описание для страницы курса валют">
            <PageTitle title="Курс валют"/>
            <CurrencyListSection/>
        </Layout>
    )
}

export default CurrencyPage