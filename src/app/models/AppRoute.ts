export enum AppRoute {
    ROOT = '/',
    COUNTRY_DETAIL = '/country/:id'
}

export const getCountryDetailRoute = (id: string) => {
    return AppRoute.COUNTRY_DETAIL.replace(':id', id);
};
