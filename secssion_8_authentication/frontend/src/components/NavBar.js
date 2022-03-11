import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../contexts/auth';
const NavBar = () => {
    const authCtx =useContext(AuthContext);
   
    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/classes">Classes</NavLink>
                </li>
                <li>
                    <NavLink to="/teachers">Teachers</NavLink>
                </li>
                {authCtx.user ? null : (
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                )}
            </ul>
        </div>
    );
};

export default NavBar;