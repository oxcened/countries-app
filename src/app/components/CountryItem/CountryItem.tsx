import React from 'react';
import { Country } from '../../models/Country';
import { locale } from '../../utils/locale';
import { Field, FieldProps } from '../LabelValue/Field';
import { numberWithCommas } from '../../utils/utils';

export type CountryItemProps = {
    country: Country;
    isDetail?: boolean;
    onClick?: () => void;
}

export const CountryItem = ({ country: { name, flag, population, languages = [], currencies = [], capital }, onClick, isDetail }: CountryItemProps) => {
    const mLanguages = languages.map(l => l.name).join(', ');
    const mCurrencies = currencies.map(l => l.code).join(', ');

    const fields: FieldProps[] = [
        { label: locale.country, value: name, valueTestId: 'countryName' },
        { label: locale.population, value: numberWithCommas(population) },
        ...isDetail ? [
            { label: locale.capital, value: capital },
            { label: locale.languages, value: mLanguages },
            { label: locale.currencies, value: mCurrencies }
        ] : []
    ];

    const mappedFields = fields.map((f, i) => <Field key={i} {...f} />);

    return <div className='countryItem' onClick={onClick}>
        <img className='flag' src={flag} alt={`${name} ${locale.flag}`} />
        {mappedFields}
    </div>;
};
