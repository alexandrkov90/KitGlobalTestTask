import styles from "./CurrencyListItem.module.scss"
import React, {FC} from "react"
import classNames from "classnames/bind";

let cx = classNames.bind(styles)

type CurrencyListItemProps = {
    title: string,
    current:string,
    handleClick:(title: string) => void,
}

const CurrencyListItem: FC<CurrencyListItemProps> = ({title, current, handleClick}) => {
    const itemClasses = cx({
        CurrencyListItem: true,
        CurrencyListItemActive: current === title
    })
    return (
        <div className={itemClasses} onClick={() => handleClick(title)}>
            {title}
        </div>
    )
}

export default React.memo(CurrencyListItem)