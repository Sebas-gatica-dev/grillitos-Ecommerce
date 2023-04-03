import { 
    useState,
    useRef,
    useEffect
 } 
from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}



const Carro = () => {

   const { carro, setCarro } = useState([]);
   const { esCarroVisible, setCarroVisible } = useState(false);
 



   const mostrarCarro = () => {
    if(!carro.length) {
      return
    }
    setCarroVisible(!esCarroVisible);
  }

  
    const cantidad = carro.length + 1;

   const getNumber = (n) => {

        if(!n){return ' '}
        return n > 9 ? '9+' : n
    }

    return (



      <div>

    

        <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
              Carro
           <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cantidad !== 0
                ? getNumber(cantidad)
                : 0}
            </span>
        </button>


        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
        
      </div>
    )
  
}

export default Carro
