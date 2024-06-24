import React from 'react';
import './styles.css'
import Header from '@/components/Header';

function Professor() {
    return (
        <>
            <Header>
                <h1>Bem Vindo, professor (nome)!</h1>
            </Header>
                <header className="topnav2">
                    <div>
                        <nav>
                            <ul className="topnav-menu2">
                                <li><label id="texto1">Suas provas</label><a href="novaprova.html"><button id="provanew">Nova Prova</button></a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <nav>
                    <div id="txtProva1">Prova 1</div>
                    <br />
                    <img id="prova1" src="exame figma.png" useMap="#editarprova" />
                    <div id="txtProva2">Prova 2</div>
                    <img id="prova2" src="exame figma.png" useMap="#editarprova" />
                    <map name="editarprova">
                        <area shape="rect" href="novaprova.html" target="_blank" coords="0,1,417,118" />
                    </map>
                </nav>
            </div>
            <div>
                <div id="txtProva3">Prova 3</div>
                <img id="prova3" src="exame figma.png" useMap="#editarprova" />
                <map name="editarprova">
                    <area shape="rect" href="novaprova.html" target="_blank" coords="0,1,417,118" />
                </map>
            </div>
            <div>
                <div id="txtProva4">Prova 4</div>
                <img id="prova4" src="exame figma.png" useMap="#editarprova" />
                <map name="editarprova">
                    <area shape="rect" href="novaprova.html" target="_blank" coords="0,1,417,118" />
                </map>
            </div>
            <div className="main-content2">
                <header className="topnav2">
                    <nav>
                        <ul className="topnav-menu2">
                            <li><label id="suasquestões">Suas questões</label><a href="novaquestao.html"><button id="provanew">Nova questão</button></a></li>
                        </ul>
                    </nav>
                </header>
                <nav>
                    <div id="txtmatematica">Matemática</div>
                    <img id="Matemática" src="questoesfigma.png" useMap="#criarquestao" />
                    <map name="criarquestao">
                        <area shape="rect" href="novaquestao.html" target="_blank" coords="0,1,417,118" />
                    </map>
                </nav>
                <div id="txtportugues">Português</div>
                <img id="Português" src="questoesfigma.png" useMap="#criarquestao" />
                <map name="criarquestao">
                    <area shape="rect" href="novaquestao.html" target="_blank" coords="0,1,417,118" />
                </map>
            </div>
            <div>
                <div id="txtquimica">Química</div>
                <img id="Química" src="questoesfigma.png" useMap="#criarquestao" />
                <map name="criarquestao">
                    <area shape="rect" href="novaquestao.html" target="_blank" coords="0,1,417,118" />
                </map>
            </div>
            <div>
                <div id="txtfisica">Física</div>
                <img id="Física" src="questoesfigma.png" useMap="#criarquestao" />
                <map name="criarquestao">
                    <area shape="rect" href="novaquestao.html" target="_blank" coords="0,1,417,118" />
                </map>
            </div>
        </>
    );
}

export default Professor;
