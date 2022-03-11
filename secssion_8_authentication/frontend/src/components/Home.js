import { useContext } from 'react';
import AuthContext from '../contexts/auth';

const Home = () => {
    const authCtx = useContext(AuthContext);
    return (
        <div>
            {authCtx.user ? 
            <h2>Welcome {authCtx.user.username}</h2>
             : 
             <h2>Please login to use  all features</h2>}
        </div>
    )
};
export default Home;