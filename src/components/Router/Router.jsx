import React from "react"
import {Routes, Route} from "react-router-dom"
import CurrentCurrencyPage from "../../pages/CurrentCurrencyPage/CurrentCurrencyPage";
import CurrencyPage from "../../pages/CurrencyPage/CurrencyPage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CurrentCurrencyPage/>}/>
            <Route path="/currency-list" element={<CurrencyPage/>}/>
        </Routes>
    )
}

export default Router