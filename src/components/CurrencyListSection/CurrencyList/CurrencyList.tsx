import styles from "./CurrencyList.module.scss"
import React, {FC,useEffect} from "react"
import {useAppSelector, useAppDispatch} from "../../../hooks/redux";
import {fetchCurrencyList} from "../../../store/reducers/currencyList/currencyAction";
import Loader from "../../UI/Loader/Loader";
import {currenciesList} from "../../../globalVariables/variables";

type CurrencyListProps = {
    baseCurrency: string
}

const CurrencyList: FC<CurrencyListProps> = ({baseCurrency}) => {
    const {data:list, loading:listLoading} = useAppSelector(state => state.currencyState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCurrencyList(baseCurrency))
    }, [baseCurrency])


    return (
        <div className={styles.CurrencyList}>
            {list && (
                Object.keys(list).map(key => {
                    if (baseCurrency === key) {
                        return false
                    }
                    if (!currenciesList.includes(key)) {
                        return null
                    }

                    return (
                        <div className={styles.CurrencyListItem} key={key}>
                            <div className={styles.ItemName}>1 {key}</div>
                            {/* @ts-ignore */}
                            <div className={styles.ItemValue}>{list[key]}</div>
                        </div>
                    )
                })
            )}
            {listLoading === true && <Loader/>}
        </div>
    )
}

export default CurrencyList