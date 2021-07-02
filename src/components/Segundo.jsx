import React, {useState, useEffect} from "react";
//https://api.github.com/users/Nadja-eng/repos
const Segundo = () => {
  const [repositorios, setRepositorio] = useState([])

  useEffect(()=>{
    const pegaDados = await fetch("https://api.github.com/users/Nadja-eng/repos")
    const dados = await resposta.json() 
    setRepositorios(dados)
  }
  pegaDados()
  },[])

    return(
       <ul>
          {repositorios.map(repo =>(
          <li key={repo.id}>{repo.nome}</li>
       ))}
      </ul>
    )
    }
  
  export default Segundo