import elementsStyle from "../FormElements.module.scss"
import styles from "./Input.module.scss"
import React, {FC} from "react"
import classNames from "classnames";

type InputProps = {
    type: string,
    name: string,
    placeholder?: string,
    value:string | number,
    onChange: (e: string | number) => void
}

const Input: FC<InputProps> = ({type, name, placeholder, value, onChange}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e):void => onChange(e.target.value)}
            className={classNames({
                [styles.Input]: true,
                [elementsStyle.FormElements]: true
            })}
        />
    )
}

export default React.memo(Input)