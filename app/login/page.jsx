"use client";
import React, {useState} from 'react';
import './styles.css'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <>
            <Header />
            <div className="central">
                <div className="container-logo">
                    <Image
                    src={Logo}
                    width= {600}
                    alt="Logo"
                    />
                </div>
                
                <div className="container-form">
                    <form className="form">
                        <h1 className="conecte-se">Conecte-se</h1>
                        <h1 className="a-sua-conta">à sua conta</h1>
                        <h2>{email}{senha}</h2>
                        <Input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => {
                            setEmail(e.target.value)
                            }} 
                        />
                        <Input 
                        type="password" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={(e) => {
                            setSenha(e.target.value)
                        }}
                        />
                        <Button 
                        type='submit' 
                        onClick={async (event) => {
                            event.preventDefault();
                            
                            if (email === '' || senha === '') {
                                alert('Preencha os campos.')
                            }
                            if (user) {
                                alert('Logado com sucesso')
                            }
                            else {
                                alert('Senha ou usuário incorretos.')
                            }
                        }}
                        >Entrar</Button>
                    </form>
                </div>
                
            </div>
        </>
    );
}
 
export default Login;