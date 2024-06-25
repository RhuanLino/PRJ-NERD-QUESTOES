import React from 'react';
import './styles.css'
import Header from '@/components/Header';
import Image from 'next/image';
import N from '@/public/n_branco.svg'

function Professor() {
    return (
        <>
            <Header className='header'>
                <h1 className="bem_vindo">Bem Vindo, professor (nome)!</h1>
                <Image src={N}  width={100} alt="n_branco"/>
            </Header>
        </>
    );
}

export default Professor;
