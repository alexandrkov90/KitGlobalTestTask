import elementsStyle from "../FormElements.module.scss"
import styles from "./Input.module.scss"
import React from "react"
import classNames from "classnames";

const Input = ({type, name, placeholder, value, onChange}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={classNames({
                [styles.Input]: true,
                [elementsStyle.FormElements]: true
            })}
        />
    )
}

export default React.memo(Input)