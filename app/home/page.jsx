import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Profile from "@/public/profile.svg"
import "./styles.css"

const Home = () => {
    return (
        <>
            <Header className="nav">
                <nav>
                    <ul>
                        <li>
                            <h1>Questões</h1>
                        </li>
                        <li>
                            <h1>Sobre</h1>
                        </li>
                        <li>
                            <Image 
                            src={Profile}
                            alt="Profile icon"
                            />
                        </li>
                    </ul>
                </nav>  
            </Header>
        </>
    );
}
 
export default Home;