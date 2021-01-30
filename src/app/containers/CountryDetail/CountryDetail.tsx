import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getCountries, getCountry } from '../../services/CountryService';
import { Country } from '../../models/Country';
import { CountryItem } from '../../components/CountryItem/CountryItem';
import { AppRoute, getCountryDetailRoute } from '../../models/AppRoute';
import { scrollToTop } from '../../utils/utils';
import { locale } from '../../utils/locale';

export const CountryDetail = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [country, setCountry] = useState<Country>();
    const [bordering, setBordering] = useState<Country[]>();
    const [isNotFound, setNotFound] = useState(false);

    useEffect(() => {
        scrollToTop();

        getCountry(id).then(c => {
            if (c) {
                setCountry(c);

                if (!!c.borders?.length) {
                    getCountries(c.borders).then(b => {
                        setBordering(b ?? []);
                    });
                } else {
                    setBordering([]);
                }
            } else {
                setNotFound(true);
            }
        });
    }, [id]);

    const countryClick = (id: string) => {
        history.push(getCountryDetailRoute(id));
    };

    const backClick = () => {
        history.push(AppRoute.ROOT);
    };

    const mBordering = bordering?.map((c, i) => {
        return <CountryItem key={i} country={c} onClick={() => countryClick(c.alpha3Code)} />;
    });

    return <div className='countryDetail'>
        <button className='backButton' onClick={backClick}>{locale.goBack}</button>
        {isNotFound ? <h1>{locale.notFound}</h1> : <>
            {country && <div className='countryContainer'>
                <CountryItem country={country} isDetail />
            </div>}
            {!!bordering?.length && <>
                <p className='color-primary'>{locale.borderingCountries}</p>
                <div className='bordering'>
                    {mBordering}
                </div>
            </>}
        </>}
    </div>;
};
