import styles from "./CurrencyList.module.scss"
import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {fetchCurrencyList} from "../../../store/actions/currencyListAction";
import Loader from "../../UI/Loader/Loader";
import {currenciesList} from "../../../globalVariables/variables";

const CurrencyList = ({baseCurrency}) => {
    const list = useSelector(state => state.currencyState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrencyList(baseCurrency))
    }, [baseCurrency])

    return (
        <div className={styles.CurrencyList}>
            {list?.data && (
                Object.keys(list.data).map(key => {
                    if (baseCurrency === key) {
                        return false
                    }
                    if (!currenciesList.includes(key)) {
                        return null
                    }
                    return (
                        <div className={styles.CurrencyListItem} key={key}>
                            <div className={styles.ItemName}>1 {key}</div>
                            <div className={styles.ItemValue}>{list.data[key]}</div>
                        </div>
                    )
                })
            )}
            {list.loading === true && <Loader/>}
        </div>
    )
}

export default CurrencyList