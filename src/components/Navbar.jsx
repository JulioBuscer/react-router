import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navbar = () => {

    //Definimos el history usando el hook useHistory 
    const history = useHistory();

    const handleLogout = () => {
        //console.log(history);

        //Usando el metodo replace que permite reemplazar una ruta por otra
        history.replace("/login");
    };


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <h2 className="navbar-brand">DBZ App</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName='active text-white'
                                className="nav-link active" aria-current="page"
                                to="/mens">Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active text-white'
                                className="nav-link active" aria-current="page"
                                to="/womens">Womens</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active text-white'
                                className="nav-link active" aria-current="page"
                                to="/search">Search</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex' >
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;