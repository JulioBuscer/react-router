import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import CharacterScreen from '../pages/CharacterScreen';
import MensScreen from '../pages/MensScreen';
import SearchScreen from '../pages/SearchScreen';
import WomensScreen from '../pages/WomensScreen';

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/mens" component={MensScreen} />
                <Route exact path="/womens" component={WomensScreen} />
                <Route exact path="/search" component={SearchScreen} />
                {/* Ruta con parametro : id */}
                <Route exact path="/character/:id" component={CharacterScreen} />
            </Switch>
        </>
    )
}

export default AppRouter
