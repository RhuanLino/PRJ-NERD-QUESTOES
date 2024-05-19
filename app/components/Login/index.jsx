import React, {useState} from 'react';
import './styles.css'
import Logo from '../../images/logo.svg'
import Image from 'next/image'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return (
        <>
            <div className="central">
                <div className="container-logo">
                    <Image
                    src={Logo}
                    width= {600}
                    alt="Logo"
                    />
                </div>
                
                <div className="container-form">
                    <form action="" className="form">
                        <h1 className="conecte-se">Conecte-se</h1>
                        <h1 className="a-sua-conta">à sua conta</h1>
                        <input type="email" className="email" value={email} placeholder="Email" />
                        <input type="password" className="senha" value={senha} placeholder="Senha" />
                    </form>
                </div>
                
            </div>
        </>
    );
}
 
export default Login;