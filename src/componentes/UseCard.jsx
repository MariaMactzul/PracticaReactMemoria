import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import './UseCard.css'

const UserCard = ({ nombre, role, descripcion, github, img, setVolteadas, volteadas, ocultar, cartas }) => {

    const [ocultarC, setOcultarC] = useState(ocultar)

    const MoverTarjeta = (value) => {
        setOcultarC(!ocultarC)
        setVolteadas([...volteadas, value])
        //console.log(volteadas, 'i am volteadas Xd')
    }

    useEffect(() => {
        if (ocultar != ocultarC) {
            setTimeout(() => {
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