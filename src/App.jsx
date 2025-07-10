import { useState } from 'react'
import Baraja from './componentes/Baraja'
import { Button } from 'react-bootstrap'
import Contador from './componentes/Contador'

function App() {
  const [conta, setConta] = useState(0)

  return (
    // <>
    //   <div className='d-flex justify-content-center mt-5 gap-3'>
    //     <Button onClick={() => setConta(conta + 1)}>Aumentar Contador</Button>
    //     <Button variant='success' onClick={() => setConta(0)}>Reinicia el Contador</Button>
    //   </div>
    //   <div className=' text-center'>
    //     <Contador
    //       conta={conta}
    //     ></Contador>
    //   </div>

    // </>


     <Baraja></Baraja>//App es padre de Baraja
  )
}

export default App
