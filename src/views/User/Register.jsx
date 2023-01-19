import { useState } from 'react';
import './User.scss';
import axios from 'axios';

const Register = () => {

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
  });
  const [msj, setMsj] = useState('');

  const handleChangeUser = (ev) => {
    setNewUser({ ...newUser, [ev.target.id]: ev.target.value })
  }

  const handleCreate = (ev) => {
    ev.preventDefault();
    axios.post('https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/register', newUser)
    .then((res) => {
      console.log(res);
      if(res.data._id){
        return setMsj('Te registraste correctamente.');
      }
    });
  }

  return (
    <>
      <form className='user'>
        <label htmlFor="email">Email</label>
        <input className='input' type="text" id="email" onChange={handleChangeUser} /> <br />
        <label htmlFor="password">Password</label>
        <input className='input' type="password" id="password" onChange={handleChangeUser} />
        <button className='butSubmit' onClick={handleCreate} >Registrarse</button>
      </form>
      <p className='user'>{msj}</p>
    </>
  );
};
export default Register;
