import styles from "./Button.module.scss"
import React from "react"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Button = ({title, onClick, theme}) => {
    const buttonClass = cx({
        Button: true,
        [theme]: true
    })

    return (
        <button className={buttonClass} onClick={onClick}>
            {title}
        </button>
    )
}

export default React.memo(Button)