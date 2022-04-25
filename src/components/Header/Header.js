import styles from "./Header.module.scss"
import React from "react"
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.Header}>
            <Container>
                <Button title="Конвертер валют" theme="orange" onClick={()=>navigate('/')}/>
                <Button title="Курс валют" theme="orange" onClick={()=>navigate('/currency-list')}/>
            </Container>
        </header>
    )
}

export default Header