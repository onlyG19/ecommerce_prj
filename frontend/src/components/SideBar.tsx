import { Link } from 'react-router-dom';
import { FaHouse, FaBoxOpen, FaCartShopping, FaUser} from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="menu-toggle">☰</button>
      <nav>
        <ul>
          <li><Link to="/"><FaHouse /> Inicio</Link></li>
          <li><Link to="/products"><FaBoxOpen /> Productos</Link></li>
          <li><Link to="/cart"><FaCartShopping /> Carrito</Link></li>
          <li><Link to="/account"><FaUser /> Mi Cuenta</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
