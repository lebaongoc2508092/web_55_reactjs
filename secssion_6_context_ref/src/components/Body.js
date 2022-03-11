import { useContext } from 'react';
import Login from './Login';
import SideBar from './SideBar';
import Content from './Content';
import AuthCtx from '../authContext';

const Body = () => {
    const authCtx = useContext(AuthCtx);
    return (
        <div className=" border flex-1 center items-stretch" >
            {authCtx.isLoggedIn ? (
            <>
            <SideBar /> 
            <Content />           
            </>):(
            <Login />
            )}

        </div>
    );
}; 

export default Body;