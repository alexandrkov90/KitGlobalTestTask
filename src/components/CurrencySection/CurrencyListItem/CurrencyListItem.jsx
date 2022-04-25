import styles from "./CurrencyListItem.module.scss"
import React from "react"
import classNames from "classnames/bind";

let cx = classNames.bind(styles)

const CurrencyListItem = ({title,current, handleClick}) =>{
    const itemClasses = cx({
        CurrencyListItem: true,
        CurrencyListItemActive: current === title
    })
    return (
        <div className={itemClasses} onClick={()=>handleClick(title)}>
            {title}
        </div>
    )
}

export default React.memo(CurrencyListItem)