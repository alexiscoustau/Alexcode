import { Link, NavLink } from "react-router-dom";
import { categoria } from "../../../MockData/MockData";

const NavProducto = ({ categoria }) => {
  return (
    <>
      <li className="nav-item ">
        <Link to={`/producto/${categoria}`} className="nav-link">
          {categoria}
        </Link>
      </li>
    </>
  );
};

export default NavProducto;
