import React from "react";
import Card from "./components/Card";
import Header from "./components/HeaderMain.js"
import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"

export default function AppCard(){ //É necessario pois é referente a paguina de cada card

    
    <MainContent/>
    let filmes = [{
        id: "0",
        nome: "DeadPool",
        categoria: "acao",
        classificacao: "18",
        duracao: "200"
    },
    {
        id: "1",
        nome: "Ta dando onda",
        categoria: "comedia",
        classificacao: "L",
        duracao: "160"
    },
    {
        id: "2",
        nome: "Emoji o filme",
        categoria: "infantil",
        classificacao: "L",
        duracao: "210"
    },
    {
        id: "3",
        nome: "Senhor dos Aneis",
        categoria: "Acao",
        classificacao: "16",
        duracao: "500"
    },
    {
        id: "4",
        nome: "Os incriveis",
        categoria: "infantil",
        classificacao: "L",
        duracao: "120"
    },
    
    ]

    

    return(
        <div>
            <Header/>
            <div className="movies-container-AppCard">
            <Card 
                    nome={filmes[0]["nome"]}
                    categoria={filmes[0]["categoria"]}
                    classificacao={filmes[0]["classificacao"]}
                    duracao={filmes[0]["duracao"]}
                />
            </div>
            <Footer/>
        </div>
        
    )

}