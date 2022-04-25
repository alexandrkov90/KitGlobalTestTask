import elementsStyle from "../FormElements.module.scss"
import styles from "./Select.module.scss"
import React, {useRef, useState} from "react"
import classNames from "classnames/bind";
import {useOutsideClick} from "../../../../hooks/useOtsideClick";



let cx = classNames.bind(styles);

const Select = ({title, children}) => {
    const [activeSelect, setActiveSelect] = useState(false);
    const refWrapper = useRef();

    useOutsideClick(refWrapper, setActiveSelect);


    let SelectFieldClasses = cx({
        SelectField: true,
        SelectFieldActive: activeSelect,
        [elementsStyle.FormElements]:true
    });

    let SelectDropdownClasses = cx({
        SelectDropdown: true,
        SelectDropdownActive: activeSelect,
    });

    return (
        <div className={styles.SelectWrapper} ref={refWrapper}>
            <div className={SelectFieldClasses} onClick={() => setActiveSelect(!activeSelect)}>
                <span className={styles.SelectLabel}>{title}</span>
                <div className={styles.SelectDropdownIcon}/>
            </div>
            <div className={SelectDropdownClasses}>{children}</div>
        </div>
    )
}

export default Select