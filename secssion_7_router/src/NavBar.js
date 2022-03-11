import { Link, NavLink } from 'react-router-dom';

const navLinkClassName = (navLinkStatus) => {
    return navLinkStatus.isActive ? 'nav-link-active' : '';
}
const NavBar = () => {
    return (
        <div>
            <h2>Welcome to our Website</h2>
            <ul>
                <li>
                    <NavLink className={navLinkClassName} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/about-us">
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/users">
                        Users
                    </NavLink>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default NavBar;