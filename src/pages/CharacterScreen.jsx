import React from 'react';
import { useParams } from 'react-router';
import { Characters } from '../models/Characters';

const CharacterScreen = ({ history }) => {
    //Usamos el hook useParams para tener acceso a los parametros de la ruta.
    const { id } = useParams();

    //Filtramos los personajes en base al id
    const { type, name, description } = Characters.find((character) => character.id === id);
    const path = `/assets/${type}-${id}.png`;

    const handleBack = () => {
        history.goBack();
    };

    return (
        <div className='container row mt-5 text-center'>
            <div className="col-4">
                <img className="img-thumbnail" style={{ height: "400px" }}
                    src={path} alt={id} />
            </div>
            <div className="col-4">
                <h2>Nombre: {name}</h2>
                <p>Description: {description}</p>
                <button onClick={handleBack} className='btn btn-outline-warning'>Go Back</button>
            </div>
        </div>
    )
}

export default CharacterScreen
