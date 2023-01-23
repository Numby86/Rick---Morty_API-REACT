import { useState } from 'react';
import './User.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader.jsx';

const Login = () => {

  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  });
  const [msj, setMsj] = useState('');
  const [msjReg, setMsjReg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUser = (ev) => {
    setuserLogin({ ...userLogin, [ev.target.id]: ev.target.value });
  };
  const handleLogin = (ev) => {
    ev.preventDefault();
    setLoading(true);
    setMsjReg(true);
    axios.post('https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/login', userLogin)
    .then((res) => {
      if(res.data._id){
        setMsj('Login correcto.');
        setLoading(false);
      }
    })
    .catch((error) => {
      setMsj('Error de usuario. Intentelo de nuevo.');
      setLoading(false);
    });
  }
  return (
    <>
      <form className={msj === 'Login correcto.' ? 'none' : 'user'}>
        <label htmlFor="user">Usuario</label>
        <input className='input' type="text" id="email" onChange={handleUser} />
        <label htmlFor="password">Contraseña</label>
        <input className='input' type="password" id="password" onChange={handleUser} />
        <button className='butSubmit' onClick={handleLogin}>Login</button>
      </form>
      {loading === true ? <Loader></Loader> : null}
      {msjReg === false ? <p className='user'>Aun no eres usuario?  <Link to={'/register'} className='link'>REGISTRATE</Link></p> : null}
      {msj === 'Login correcto.' ? <Link className='user' to={'/posts'}>Ver post</Link> : null}
      <p className='user'>{msj}</p>
    </>
  );
};
export default Login;

