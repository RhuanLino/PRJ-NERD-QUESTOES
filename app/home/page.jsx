"use client"
import React from "react";
import Image from "next/image";
import N from "@/public/n_branco.svg"
import HomeImage from "@/public/home.svg"
import Profile from "@/public/profile.svg"
import "./styles.css"
import { inter } from "@/public/fonts";
import { useRouter } from "next/navigation";


const Home = () => {
    
    const router = useRouter();

    return (
        <>
            <header className="header">
                <div className="esquerda">
                    <nav>
                        <ul className="logo">
                            <Image src={N} width={43} alt="Logo N"></Image>
                        </ul>
                    </nav>
                </div>
                <div className="direita">
                    <nav className="nav">
                        <ul className="opcoes">
                            <li>
                                <h1 className={inter.className} onClick={() => router.push('/questoes')}>Questões</h1> 
                            </li>
                            <li>
                                <h1 className={inter.className} onClick={() => router.push('/sobre')}>Sobre</h1>
                            </li>
                            <li>
                                <Image src={Profile} width={35} alt="Profile icon" onClick={() => router.push('/login')}/>
                            </li>
                        </ul>
                    </nav>  
                </div>
            </header>
            <div className="home">
                <Image src={HomeImage} alt="Home image"></Image>
            </div>
        </>
        
    );
}
 
export default Home;