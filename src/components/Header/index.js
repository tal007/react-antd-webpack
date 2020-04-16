import './index.less';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { routes } from '@/routes/Routes';

const Header = () => (
  <header className="rg-header">
    <nav>
      {routes.map((value) => (
        <NavLink
          key={value.path}
          to={value.path}
          exact
          className="nav-item"
          activeClassName="nav-active-item"
        >
          {value.displayName}
        </NavLink>
      ))}
    </nav>
    {dayjs().format()}
  </header>
);

export default Header;
