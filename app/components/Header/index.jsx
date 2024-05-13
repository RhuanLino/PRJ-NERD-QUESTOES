import React from "react";
import "./styles.css"
import logo from '../../images/logo.svg'

const Header = () => {
    return ( 
        <>
            <div>
                <header className="header-base">Bom dia</header>
            </div>

            <div className="central">
                <form action="" className="form">
                    <input type="email" className="email" placeholder="Email" />
                    <input type="password" className="senha" placeholder="Senha" />
                </form>

                <img src={logo} alt="logo" />
            </div>
        </>
    );
}
 
export default Header;