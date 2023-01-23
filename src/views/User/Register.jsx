import { useState } from "react";
import "./User.scss";
import axios from "axios";
import Loader from '../../components/Loader/Loader.jsx';
import Button from '../../components/Button/Button.jsx';
import { Link } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    telefono: ""
  });
  const [msj, setMsj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeUser = (ev) => {
    setNewUser({ ...newUser, [ev.target.id]: ev.target.value });
  };
  const refreshPage = ()=>{
    window.location.reload();
 }

  const handleCreate = (ev) => {
    ev.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/register",
        newUser
      )
      .then((res) => {
        console.log(res.data);
        if (res.data._id) {
          setMsj("Te registraste correctamente.");
          setLoading(false);
        }
      })
      .catch(() => {
        setMsj("Se ha producido un error al registrarte. ");
        setLoading(false);
      });
  };

  return (
    <>
      <form className={msj === "Te registraste correctamente." ? 'none' : 'user'}>
        <label htmlFor="name">Nombre</label>
        <input
          className="input"
          type="text"
          id="name"
          onChange={handleChangeUser}
        />
        <label htmlFor="surname">Apellidos</label>
        <input
          className="input"
          type="text"
          id="surname"
          onChange={handleChangeUser}
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          className="input"
          type="tel"
          id="telefono"
          onChange={handleChangeUser}
        />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="text"
          id="email"
          onChange={handleChangeUser}
        />
        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          onChange={handleChangeUser}
        />
        <button className="butSubmit" onClick={handleCreate}>
          Registrarse
        </button>
      </form>
      {loading === true ? <Loader></Loader> : null}
      <p className="user">{msj}</p>
      <button onClick={refreshPage} className={msj === "Se ha producido un error al registrarte. " ? 'refresh' : 'none'} to={'/register'}>Intentalo de nuevo</button>
      {msj === "Te registraste correctamente." ? <Link to={'/'}><Button texto={'GO HOME'} /></Link> : null}
    </>
  );
};
export default Register;
