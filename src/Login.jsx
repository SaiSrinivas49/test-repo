import './Login.css';
import { loginContext } from './App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useContext(loginContext);

    const handleLogin = () =>{
        setIsLogin(true);
        navigate('/Home');
    }

    return(
        <>
        <div className='L-Head'>
            <h2>To Do Manager</h2>
        </div>
        <div className='L-Body'>
            <input type="text" placeholder='User Name' className='L-input'/><br />
            <input type="password" placeholder='Password' className='L-input'/><br />
            <button type='button' className='L-button' onClick={handleLogin}>Login</button>
        </div>
        <div className='L-footer'>
            <span><button className='other-button'>Forgot Password?</button></span>
            <span><button className='other-button' onClick={() => navigate('/SignUp')}>Don't have an account?</button></span>
        </div>
        </>
    );
};

const SignUp = () => {

    const {isLogin, setIsLogin} = useContext(loginContext);

    const navigate = useNavigate();    

    return(
        <>
        <div className='L-Head'>
            <h2>To Do Manager</h2>
        </div>
        <div className='L-Body'>
        <input type="text" placeholder='User Name' className='L-input'/><br />
        <input type="password" placeholder='Password' className='L-input'/><br />
        <input type="password" placeholder='Confirm-Password' className='L-input'/><br />        
        <button type='button' className='L-button'>Sign Up</button>
        </div>
        <div className='L-footer'>
            <span>Have an account?<button className='other-button' onClick={() => navigate('/')}>LogIn</button></span>
        </div>
        </>
    );
};

export {Login, SignUp};