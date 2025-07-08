import { useEffect, useState } from "react";
import UserCard from "./UseCard";
const Baraja = () => {
    const [cartas, setCartas] = useState([
        {
            nombre: 'Maria Mactzul',
            github: 'MariaMactzul',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209706091?v=4',
            ocultar: true
        },
        {
            nombre: 'Santos Agustin',
            github: 'AgustinLopez11',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209786070?v=4',
            ocultar: true
        },
        {
            nombre: 'Nery Tucubal',
            github: 'nerytucubal',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209705949?v=4',
            ocultar: true
        }, {
            nombre: 'Maria Mactzul',
            github: 'MariaMactzul',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209706091?v=4',
            ocultar: true
        },
        {
            nombre: 'Santos Agustin',
            github: 'AgustinLopez11',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209786070?v=4',
            ocultar: true
        },
        {
            nombre: 'Nery Tucubal',
            github: 'nerytucubal',
            role: 'Desarrollador Web',
            img: 'https://avatars.githubusercontent.com/u/209705949?v=4',
            ocultar: true
        }
    ])

    const [volteadas, setVolteadas] = useState([])

    const actualizarCarta = (value) => {//Actualizamos los valores de ocultar de cada carta
        let nuevoArreglo = []//Variable que utilizamos para guardar el nuevo arreglo ya con la propiedad ocultar actualizado
        nuevoArreglo = cartas.map(carta => {
            if (carta.nombre == volteadas[0] || carta.nombre == volteadas[1]) {
                carta.ocultar = value
            }
            return carta//retornamos todas las cartas a las cual le cambiamos la propiedad ocultar (las retornamos en nuevoArreglo)
        })

        setCartas(nuevoArreglo)
        setVolteadas([])
    }

    useEffect(() => {
        //  console.log('renderizando useEfect')
        if (volteadas.length > 1 && volteadas[0] == volteadas[1]) {
            actualizarCarta(false)

            //    console.log('Son iguales')
        } else if (volteadas.length == 2) {
            actualizarCarta(true)
            //  console.log('NO son iguales')
        }
        //console.log(volteadas)
    }, [volteadas])

    return (
        <>
            <h1>Listado de Cartas</h1>
            <div className="d-flex flex-wrap justify-content-center gap-5">
                {
                    cartas.map((item) =>
                        <UserCard

                            {...item}
                            volteadas={volteadas}
                            setVolteadas={setVolteadas}
                            cartas={cartas}

                        ></UserCard>
                    )
                }
            </div>


        </>
    );
}

export default Baraja;