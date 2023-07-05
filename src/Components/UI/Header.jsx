import logo from '../../assets/investment-calculator-logo.png'
import style from './Header.module.css';

export default function Header(){
    return(
        <header className={style.header}>
            <img src={logo} alt="INVESTMENT LOGO" />
            <h1>INVESTMENT CALCULATOR</h1>
        </header>
    )
}