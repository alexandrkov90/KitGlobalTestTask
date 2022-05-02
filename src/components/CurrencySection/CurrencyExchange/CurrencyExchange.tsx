import styles from "./CurrencyExchange.module.scss"
import React, {useState, useEffect} from "react"
import Input from "../../UI/FormElements/Input/Input";
import Select from "../../UI/FormElements/Select/Select";
import {useAppSelector, useAppDispatch} from "../../../hooks/redux";
import {fetchConversation} from "../../../store/reducers/conversation/conversationAction";
import Loader from "../../UI/Loader/Loader"
import CurrencyListItem from "../CurrencyListItem/CurrencyListItem";
import {currenciesList} from "../../../globalVariables/variables";

const CurrencyExchange = () => {
    const [sum, setSum] = useState(0)
    const [result, setResult] = useState(0)
    const [baseCurrency, setBaseCurrency] = useState('USD')
    const [changeCurrency, setChangeCurrency] = useState('UAH')
    const [currencyRates, setCurrencyRates] = useState(0)

    const {data:conversationData, loading} = useAppSelector(state => state.conversationState)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchConversation({
            base:baseCurrency,
            to:changeCurrency
        }))
    }, [baseCurrency, changeCurrency])

    useEffect(() => {
        if (conversationData ) {
            setCurrencyRates(conversationData)
        }
    }, [conversationData])


    useEffect(() => {
        let number = +sum
        if (typeof number !== 'number') {
            setResult(0)
        }
        let result = number * currencyRates
        setResult(+result.toFixed(2))


    }, [sum, currencyRates])

    const handleChangeSum = (number: any) => {
        if (+number < 0) {
            setSum(0)
        } else {
            setSum(number)
        }
    }

    const CurrenciesList = (currencyExclude: string, handleClick:  React.Dispatch<React.SetStateAction<string>>) => {
        return (
            currenciesList.map((title) => {
                return (
                    <CurrencyListItem
                        current={currencyExclude}
                        title={title}
                        handleClick={handleClick}
                        key={title}
                    />
                )
            })
        )
    }

    return (
        <div className={styles.CurrencyExchangeBlock}>
            <Input
                type="number"
                name="sum"
                placeholder="Введите сумму"
                value={sum}
                onChange={handleChangeSum}
            />
            <Select title={baseCurrency}>
                {CurrenciesList(baseCurrency, setBaseCurrency)}
            </Select>
            <span className={styles.currencyExchangeLabel}> в </span>
            <Select title={changeCurrency}>
                {CurrenciesList(changeCurrency, setChangeCurrency)}

            </Select>
            <span className={styles.currencyExchangeResult}>{result}</span>

            {loading === true && <Loader/>}
        </div>
    )
}

export default CurrencyExchange