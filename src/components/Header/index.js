import './index.less';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="rg-header">
    <nav>
      <NavLink
        to="/"
        exact
        className="nav-item"
        activeClassName="nav-active-item"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className="nav-item"
        activeClassName="nav-active-item"
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
