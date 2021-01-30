import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { locale } from './locale';

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const numberWithCommas = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const handleAxiosError = (e: AxiosError) => {
    console.error(e);
    toast.error(e.message ?? locale.genericError);
};
