import React, {useState} from "react"

const Primeiro = () => {
  const [repositorios, setRepositorio] = useState([
   {
     id:1,
     nome: "Repositorio1",
   },
   {
    id:2,
    nome: "Repositorio2",
  },
  {
    id:3,
    nome: "Repositorio3",
  },
  ])

  function adicionaRepo(){
    setRepositorio(
    [...repositorios, {
      id: Math.random(),
      nome:"NovoRepo",
    }]
    )
  }
    return(
        <>
          <ul>
            {repositorios.map(repo=>(
              <li key={repo.id}>{repo.nome}</li>  
            ))}
          </ul>
          <button onClick={adicionaRepo}>Add repo</button>
        </>
    )
}


export default Primeiro