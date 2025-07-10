import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import './UseCard.css'
//RECORDATORIO LAS ACTUALIZACIONES DE ESTADO SON FUNCIONES ASINCRONAS, NO SE ACTUALIZAN DE INMEDIATO EL ESTADO
const UserCard = ({ nombre, role, descripcion, github, img, setVolteadas, volteadas, ocultar, cartas }) => {//Recibimos las propiedades que vamos a utilizar

    const [ocultarC, setOcultarC] = useState(ocultar)//Estado local que guarda el valor de la propiedad ocultar de las cards (false o true)
    // //Segun se haya actualizado el Estado en Baraja de cards

    const MoverTarjeta = (value) => {//Funcion que nos ayuda Para mover las targetas 
        setOcultarC(!ocultarC)//Modificamos el Estado de ocultarC, negando su valor actual
        setVolteadas([...volteadas, value])//Modificamos el arreglo de las tarjetas volteadas ahora sera: el elemento que ya tenia en el arreglo y el nombre de la tarjeta
        console.log(volteadas,"soy volteadas despues de click") 
        //console.log(volteadas, 'i am volteadas Xd')
    }
   
//La propiedad ocultar viene desde el componente padre(Baraja), y por lo tanto es controlada externamente
//ocultarC es un estado local del componente UseCard y es inicializado con el valor de ocultar
    useEffect(() => {
        if (ocultar != ocultarC) {//Solo van a ser diferentes si el usuario dio Click en una tarjeta y 
        // se realiza la funcion MoverTarjeta Modificando el valor del Estado Local y como ocultar es un props que viene del padre
            setTimeout(() => {//
                setOcultarC(ocultar)
            }, 2500)
        }
    }, [cartas])

    return (
        
        <div
            onClick={ ocultarC ? ()=> MoverTarjeta(nombre) : null}
            className={`bg-black ms-4 rounded-4 ${ocultarC ? '' : 'flip'}`}
            style={{ width: '250px', minHeight: '200px', height: 'auto' }}>
            <Card className={`w-auto border border-5 bg-secondary rounded-4 p-4 miElemento ${ocultarC ? 'opacity-0' : ''}`}>
                <Card.Img className="rounded-circle" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text className=" text-muted">
                        <strong>My description:</strong>
                        <br />
                        Hola!!!
                        Soy un {role}
                        <br />
                        {descripcion}
                    </Card.Text>
                    <div className="d-flex gap-4 flex-wrap justify-content-center">
                        <Button href={`https://github.com/${github}`} className="w-100" variant="danger">Follow</Button>
                        {/* <Button onClick={likes} className=" w-100" variant="info">{contador} Like</Button> */}
                    </div>

                </Card.Body>
            </Card>
        </div>


    );
}

export default UserCard;