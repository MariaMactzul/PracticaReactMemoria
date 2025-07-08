import { useEffect } from "react";

const Contador = (props) => {
    
    useEffect(()=>{
        console.log(`El contador cambio a ${props.conta+1}`)
    },[props.conta])

    return (
        
        <>
          
         <h1>El contador esta en: {props.conta}</h1>   
         {
            props.conta==0?<p>Vamos a empezar!</p> : props.conta>0 && props.conta<6? <p>Sigue Asi!</p> : props.conta>5? <p>Buen Trabajo!</p>:''

         }
        
        </>
       
    );
}

export default Contador;