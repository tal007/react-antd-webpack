import './index.less';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';

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
    {dayjs().format()}
  </header>
);

export default Header;
