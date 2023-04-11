import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.svg";
import  Search from '../assets/images/search.svg';
import Store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Image for apple logo" />
          </li>
          <li>
            <Link to="#" className="link-styled">Store</Link>
          </li>
          <li>
            <Link to="#" className="link-styled">Mac</Link>
          </li>
          <li>
            <Link to="#" className="link-styled">Iphone</Link>
          </li>
          <li>
            <Link to="#" className="link-styled">Watch</Link>
          </li>
          <li>
            <Link to="#" className="link-styled">AirPods</Link>
          </li>
          <li>
            <Link to="#" className="link-styled">Tv & Home</Link>
          </li>
          <li>
            <img src={Search} alt="search icon for nav-bar" />
          </li>
          <li>
            <img src={Store} alt="Store Icon for nav-bar" />
          </li>      

        </ul>
      </div>
    </nav>
  );
};

export default Nav;
