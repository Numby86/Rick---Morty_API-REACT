import { useState } from 'react';
import './User.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

const Login = (props) => {
  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  });
  const [msj, setMsj] = useState('');

  const handleUser = (ev) => {
    setuserLogin({ ...userLogin, [ev.target.id]: ev.target.value });
  };

  const handleLogin = (ev) => {
    ev.preventDefault();
    axios.post('https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/login', userLogin)
    .then((res) => {
      console.log(res);
      if(res.data._id){
        return setMsj('Login correcto.');
      }
    })
    .catch((error) => {
      return setMsj('Error de usuario. ');
    });
  }

  return (
    <>
      <form className='user'>
        <label htmlFor="user">Usuario</label>
        <input className='input' type="text" id="email" onChange={handleUser} />
        <label htmlFor="password">Contraseña</label>
        <input className='input' type="password" id="password" onChange={handleUser} />
        <button className='butSubmit' onClick={handleLogin}>Login</button>
      </form>
      <p className='user'>Si aun no eres usuario aqui puedes <Link to={'/register'} className='link'>REGISTRARTE</Link></p>
      <p className='user'>{msj}</p>
    </>
  );
};
export default Login;

