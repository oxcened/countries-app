import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../../services/CountryService';
import { Country } from '../../models/Country';
import { CountryItem } from '../../components/CountryItem/CountryItem';
import { useHistory } from 'react-router-dom';
import { getCountryDetailRoute } from '../../models/AppRoute';

export const Home = () => {
    const history = useHistory();
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getAllCountries().then(c => {
            setCountries(c ?? []);
        })
    }, []);

    const countryClick = ({ alpha3Code }: Country) => {
        history.push(getCountryDetailRoute(alpha3Code));
    }

    const mappedCountries = countries.map((c, i) =>
        <CountryItem
            key={i}
            country={c}
            onClick={() => countryClick(c)}
        />);

    return (<div className='home'>
        {mappedCountries}
    </div>);
};
