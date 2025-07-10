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

    const [volteadas, setVolteadas] = useState([])//Arreglo que contendra unicamente dos cartas que han sido volteadas

    const actualizarCarta = (value) => {//Actualizamos los valores de ocultar de cada carta //Solo se realiza esta funcion si en el arreglo de cartas volteadas ya tenemos dos elementos
        let nuevoArreglo = []//Variable que utilizamos para guardar el nuevo arreglo ya con la propiedad ocultar actualizado
        nuevoArreglo = cartas.map(carta => {
            if (carta.nombre == volteadas[0] || carta.nombre == volteadas[1]) {
                carta.ocultar = value
            }
            return carta//retornamos todas las cartas a las cual le cambiamos la propiedad ocultar (las retornamos en nuevoArreglo)
        })

        setCartas(nuevoArreglo)//Seteamos el arreglo de cartas que teniamos con el nuevoArreglo, 
        // para que ahora cartas sea igual a nuevoArreglo (arreglo con la propiedad ocultar con valor cambiado)
        setVolteadas([])//Cambiamos el estado del arreglo con las cartas volteadas a un arreglo vacio para que, pueda contener nuevamente solo dos cartas
    }
//SOLO EN ESTE USE EFFECT PODEMOS OBSERBAR CORRECTAMENTE COMO VOLTEADAS POSEEE DOS ELEMENTOS EN EL ARRAY    
    useEffect(() => {//Utilizamos useEffect para verificar son iguales o no, utilizamos como segundo parametro volteadas, para que realice la funcion cada que cambie de Estado
        //  console.log('renderizando useEfect')
        if (volteadas.length > 1 && volteadas[0] == volteadas[1]) {//Si volteadas contiene mas de un elemento y el primer elemento es igual al segundo
            actualizarCarta(false)//ocultar sera falso

            //    console.log('Son iguales')
        } else if (volteadas.length == 2) {//Si son dos elementos
            actualizarCarta(true)//ocultar sera verdadero
            //  console.log('NO son iguales')
        }
        //console.log(volteadas)
    }, [volteadas])

    return (
        <>
            <h1>Listado de Cartas</h1>
            <div className="d-flex flex-wrap justify-content-center gap-5">
                {
                    cartas.map((item) =>//UseCard hijo de componente Baraja (Este XD)
                        <UserCard

                            {...item}//mandamos todos los atributos que son propios del item
                            volteadas={volteadas}//Mandamos el Estado de volteadas
                            setVolteadas={setVolteadas}//Mandamos el setVolteadas para que desde el hijo se pueda modificar su estado
                            cartas={cartas}//mandamos el arreglo de todas las cartas//Este cambiara dependiendo de la actualizacion que de su atributo ocultar en cada elemento

                        ></UserCard>
                    )
                }
            </div>


        </>
    );
}

export default Baraja;