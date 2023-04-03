import React from 'react';
import Carro from './carrito/Carro';




export default function navbar() {




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{position:"fixed", zIndex:"1000", width:"100%",  boxShadow: '0px 15px 10px -15px #333'}}>
            <div className="container px-4 px-lg-5">
            <a className="navbar-brand row" href="#!">
                   <div className="col-2 ">
                      <img src="grillito-logo-2.jpg" style={{width:"2rem", height:"2rem", display:"inline-block"}} alt=""/>

                  </div>
                  <div className="col-4">
                        <h4>Grillitos</h4>
                  </div>
                  <div className="col-5 mt-1 me-3">
                     
                  </div>

            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Bodys</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Remeras</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Abrigos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Accesorios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Conjuntos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Ofertas</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Carro
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  )
}
