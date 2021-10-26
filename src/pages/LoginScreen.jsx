import React from 'react'

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        //El método push para meter una nueva ruta en la pila
        history.push("/mens");
    };

    return (
        <div className='container mt-5 text-center'>
            <img src="assets/animate.gif" alt="animacion" />
            <h1 className='my-3' >Login Screen</h1>
            <button className='btn btn-primary' onClick={handleLogin} >Login</button>
        </div>
    )
}

export default LoginScreen
