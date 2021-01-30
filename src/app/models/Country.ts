export type Country = {
    name: string;
    flag: string;
    population: number;
    capital: string;
    currencies: Currency[];
    languages: Language[];
    alpha3Code: string;
    borders: string[];
}

export type Currency = {
    code: string;
    name: string;
    symbol: string;
}

export type Language = {
    name: string;
    nativeName: string;
}
