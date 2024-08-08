import CartWidget from "./cartwidget/CartWidget"
import About from "./about/About"
import Contacto from "./contacto/Contacto"
import { Link , NavLink } from "react-router-dom"

const Navbar = ()=> {

    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-trasparent">
            <div className="container-fluid  ">
              <Link to='/' className="navbar-brand">🧁</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                  <li className="nav-item ">
                    <Link to='/About' className="nav-link">About</Link>
                  </li>
                  <li className="nav-item ">
                     <Link to='/Contacto' className="nav-link">Contacto</Link>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Productos
                      </a>
                      <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">Pastafrolas</a></li>
                         <li><a className="dropdown-item" href="#">Budines</a></li>
                         <li><a className="dropdown-item" href="#">Todos los productos</a></li>
                     </ul>
                  </li>
               </ul>
                  <button className="btn"><CartWidget/></button>
                
              </div>
            </div>
          </nav>
        
        </>
    )
}

export default Navbar