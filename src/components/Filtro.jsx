
import React, {useState, useEffect} from 'react'

const Filtro = () =>{
    const [personagens, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] =  useState([])
    const [busca, setBusca] = useState("")

    //pegar dados da api: https://rickandmortyapi.com/api/character 
    
    useEffect(()=>{
      fetch("https://rickandmortyapi.com/api/character")
           .then(resposta => resposta.json()) 
           .then(dados => setPersonagem(dados.results))
    },[])

    
    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem =>{
            return personagem.name.includes(busca)
        })
     )
    },[busca, personagens])
  
    return(
        <>
         <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
           {filtroPersonagem.map(personagem=> (
               <div key={personagem.id}>
                  <p>{personagem.name}</p>
                  <img src={personagem.image} alt={personagem.nome} />
                   
               </div>
           ))}

        </>
    )
}

export default Filtro