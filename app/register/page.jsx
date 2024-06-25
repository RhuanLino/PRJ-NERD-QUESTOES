"use client";
import React, { useState } from 'react';
import Image from "next/image";
import LogoN from "@/public/logo_n.svg"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { inter } from "@/public/fonts";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/services/firebaseConfig';
import "./styles.css"

const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [data, setData] = useState('');
    const [aluno, professor] = useState('Aluno', 'Professor');
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
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
            <p>Registered User: {user.user.email}</p>
          </div>
        );
      }

    return (
        <>
            <div className="top">
                <Image src={LogoN} alt="Logo N" width={100}/>
                <h1 className={inter.className}>Criar conta</h1>
            </div>
            <div className="campos">
                <Input className="w-96 h-12 text-lg" type="name" placeholder="Nome" value={nome} onChange={(e) => {
                    setNome(e.target.value)
                }} />
                <Input className="w-96 h-12 text-lg" type="name" placeholder="Sobrenome" value={sobrenome} onChange={(e) => {
                    setSobrenome(e.target.value)
                }} />
                <Input className="w-96 h-12 text-lg" type="email" placeholder="Email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <Input className="w-96 h-12 text-lg" type="password" placeholder="Senha" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <Input className="w-96 h-12 text-lg justify-center" type="date" placeholder="Data de nascimento" value={data} onChange={(e) => {
                    setData(e.target.value)
                }} />
                
                <Select>
                    <SelectTrigger className="w-96 h-12 text-lg">
                        <SelectValue placeholder="Selecionar..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={aluno}>Aluno</SelectItem>
                        <SelectItem value={professor}>Professor</SelectItem>
                    </SelectContent>
                </Select>
                <Button className="w-96 h-12 text-xl bg-red-700" type='submit' onClick={handleSignIn}>Criar</Button>
            </div>
        </>
    );
}
 
export default Register;