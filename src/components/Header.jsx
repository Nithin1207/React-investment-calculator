import "./Header.css"
import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
    return (<header> <div className="header_details" > <img src={
        logo
    }

        alt="" /> <h3>Investment calculator</h3> </div> </header>)
}