import React, {useState} from 'react'

const INITIAL_STATE = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
};

const Form = (props) => {
    const [state, setState] = useState(INITIAL_STATE);

    const submitForm = (ev) => {
        ev.preventDefault();
    };

    const handleInput = (ev) => {
        const {nombre, value} = ev.target;
        setState({...state, [nombre]: value});
    };

    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <label>
                    <p>Nombre</p>
                    <input type="text" nombre="nombre" value={state.nombre} onChange={handleInput} />
                </label>

                <label>
                    <p>Apellido</p>
                    <input type="text" aprellido="apellido" value={state.apellido} onChange={handleInput} />
                </label>

                <label>
                    <p>Email</p>
                    <input type="text" email="email" value={state.email} onChange={handleInput} />
                </label>

                <label>
                    <p>Teléfono</p>
                    <input type="text" telefono="telefono" value={state.telefono} onChange={handleInput} />
                </label>

                <div>
                    <button type="submit">Guardar Perfil</button>
                </div>
            </fieldset>
        </form>
    )
}

export default Form