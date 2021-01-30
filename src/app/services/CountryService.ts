import myAxios from '../utils/axios';
import { Endpoint } from '../models/Endpoint';
import { Country } from '../models/Country';

export const getAllCountries = async () => {
    try {
        const res = await myAxios.get<Country[]>(Endpoint.ALL_COUNTRIES);
        return res.data;
    } catch (e) {
        // TODO
    }
}

export const getCountry = async (id: string) => {
    try {
        const res = await myAxios.get<Country>(`${Endpoint.COUNTRY_DETAIL}/${id}`);
        return res.data;
    } catch (e) {
        // TODO
    }
}

export const getCountries = async (ids: string[]) => {
    try {
        const params = {
            codes: ids.join(';')
        };
        const res = await myAxios.get<Country[]>(Endpoint.COUNTRY_DETAIL, { params });
        return res.data;
    } catch (e) {
        // TODO
    }
}

