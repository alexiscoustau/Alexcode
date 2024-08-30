import CartWidget from "./cartwidget/CartWidget";
import About from "./about/About";
import Contacto from "./contacto/Contacto";
import { Link, NavLink } from "react-router-dom";
import { categoria } from "../../MockData/MockData";
import NavProducto from "./navproducto/NavProducto";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-trasparent">
        <div className="container-fluid  ">
          <Link to="/" className="navbar-brand">
            🧁
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              {categoria.map((categoria) => {
                return <NavProducto key={categoria} categoria={categoria} />;
              })}
            </ul>
            <button className="btn">
              <CartWidget />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
