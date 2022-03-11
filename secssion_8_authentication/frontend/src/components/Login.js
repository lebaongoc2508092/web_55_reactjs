import { useState,useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import http from '../utils/axios';
import AuthContext from '../contexts/auth';

const Login = () => { 
    const authCtx = useContext(AuthContext);
    const [values, setValues] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });

    const navigate = useNavigate();

    const handlerValuesChange = (event) => {
        setValues((prev) => {
            if (event.target.name == "rememberMe") {
                return {
                    ...prev,
                    rememberMe: event.target.checked,
                };
            }
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    };
    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await http.post('/auth/login', values);
            localStorage.setItem('jwt', response.data.token);
            authCtx.setUser(response.data);
            navigate('/');
        }
        catch (err) {
            // show error message
        }
       
    };
    if(authCtx.user) {
        return <Navigate to='/' replace />
    }
    return (
        <form onSubmit={handlerSubmit}>
            <h3> Login </h3>
            <div>
                <label>Username</label>
                <input type="text"
                name="username"
                value={values.username} 
                onChange={handlerValuesChange}
                />
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                name="password"
                value={values.password} 
                onChange={handlerValuesChange}
                />
            </div>
            <div>
                <input type="checkbox"
                name="rememberMe" 
                checked={values.rememberMe}
                onChange={handlerValuesChange}
                />
                <label>Remember me</label>
            </div>
            <div>
                <button type="submit"> Login </button>
            </div>
        </form>
    );
};

export default Login;