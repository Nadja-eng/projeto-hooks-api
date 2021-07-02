import React, {useState} from "react";

const Curtida = () => {
    const [valorAtual, setValor] = useState(0)

    function somaCurtida() {
        setValor(valorAtual + 1)
    }
    return(
     <>
       <p>{valorAtual}</p>
       <button onClick={somaCurtida}>❤️</button>
     </>
    );
}

export default Curtida