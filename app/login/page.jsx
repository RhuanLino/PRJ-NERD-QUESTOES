"use client";
import React, {useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/services/firebaseConfig';
import './styles.css'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Link from 'next/link';


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
              <h1>Logado com sucesso!</h1>
          </div>  
        );
      }

    return (
        <>
            <Header />
            <div className="central">
                <div className="container-logo">
                    <Image src={Logo} width= {600} alt="Logo"/>
                </div>
                
                <div className="container-form">
                    <form className="form">
                        <h1 className="conecte-se">Conecte-se</h1>
                        <h1 className="a-sua-conta">à sua conta</h1>
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
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
                        <Button 
                        type='submit' 
                        onClick={handleSignIn}
                        >Entrar</Button>
                    </form>
                </div>
                
            </div>
        </>
    );
}
 
export default Login;