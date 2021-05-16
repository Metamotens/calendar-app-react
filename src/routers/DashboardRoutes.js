import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/Navbar';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
            <>
                <Navbar/>
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/marvel" component={ MarvelScreen }></Route>
                        <Route exact path="/hero/:id" component={ HeroScreen }></Route>
                        <Route exact path="/search" component={ SearchScreen }></Route>
                        <Route exact path="/dc" component={ DcScreen }></Route>
                        <Redirect to="/marvel"/>
                    </Switch>
                </div>
            </>
    );
};
