import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from './models/AppRoute';
import { CountryDetail } from './containers/CountryDetail/CountryDetail';
import { Home } from './containers/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
    const routes = <Switch>
        <Route path={AppRoute.COUNTRY_DETAIL} component={CountryDetail} />
        <Route path={AppRoute.ROOT} component={Home} exact />
        <Redirect to={AppRoute.ROOT} />
    </Switch>;

    return (<>
        <Navbar />
        {routes}
    </>);
};
