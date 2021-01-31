import myAxios from '../utils/axios';
import { Endpoint } from '../models/Endpoint';
import { Country } from '../models/Country';
import { handleAxiosError } from '../utils/utils';

const simpleFields: (keyof Country)[] = [
    'alpha3Code',
    'name',
    'population',
    'flag'
];

const detailFields: (keyof Country)[] = [
    ...simpleFields,
    'borders',
    'capital',
    'languages',
    'currencies'
];

export const getAllCountries = async () => {
    const params = {
        fields: simpleFields.join(';')
    };
    try {
        const res = await myAxios.get<Country[]>(Endpoint.ALL_COUNTRIES, { params });
        return res.data;
    } catch (e) {
        handleAxiosError(e);
    }
};

export const getCountry = async (id: string) => {
    const params = {
        fields: detailFields.join(';')
    };
    try {
        const res = await myAxios.get<Country>(`${Endpoint.COUNTRY_DETAIL}/${id}`, { params });
        return res.data;
    } catch (e) {
        handleAxiosError(e);
    }
};

export const getCountries = async (ids: string[]) => {
    const params = {
        codes: ids.join(';'),
        fields: simpleFields.join(';')
    };
    try {
        const res = await myAxios.get<Country[]>(Endpoint.COUNTRY_DETAIL, { params });
        return res.data;
    } catch (e) {
        handleAxiosError(e);
    }
};


