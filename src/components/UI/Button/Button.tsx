import styles from "./Button.module.scss"
import React, {FC} from "react"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

type ButtonProps = {
    title:string,
    onClick?: () => void,
    theme: string
}
const Button: FC<ButtonProps> = ({title, onClick, theme}) => {
    const buttonClass = cx({
        Button: true,
        [theme]: true
    })

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default React.memo(Button)