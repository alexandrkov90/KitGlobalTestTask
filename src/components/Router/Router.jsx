import React from "react"
import {Routes, Route} from "react-router-dom"
import CurrentCurrencyPage from "../../pages/CurrentCurrencyPage/CurrentCurrencyPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CurrentCurrencyPage/>}/>
        </Routes>
    )
}

export default Router