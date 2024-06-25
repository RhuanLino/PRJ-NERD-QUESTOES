"use client"
import { dm_sans } from "@/public/fonts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Background from "@/public/sobre_background.png";
import Logo from "@/public/logo.svg"
import N from "@/public/n_branco.svg"
import "./styles.css"

const Sobre = () => {
    
    const router = useRouter();
    
    return (
        <>
            <header className="header">
                <Image src={N} width={43} alt="Logo N" onClick={() => router.push('/')}/>
            </header>
            <div>
                <Image src={Background} alt="Background Home" />
                <div className="texto">
                    <p className={dm_sans.className}>
                        O site da <strong>NERD Questões</strong> foi desenvolvido para <strong>facilitar uma dificuldade</strong> que o estudante encontra na hora de <strong>como vai estudar</strong> para 
                        o seu <strong>cargo</strong> ou <strong>faculdade dos sonhos</strong>. E apresentamos essa solução através de uma prática de <strong>estudo ativo</strong> já antiga, <strong>de resoluções massivas de questões e provas</strong>. 
                        Assim como o <strong>professor</strong> também necessita de uma plataforma de <strong>gerenciamento de provas</strong> para 
                        atender seus alunos.
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default Sobre;