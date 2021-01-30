import React from 'react';
import { locale } from '../../utils/locale';

export const Navbar = () => {
    return <div className='navbar'>
        <h2 className='title color-primary'>{locale.appName}</h2>
    </div>;
};
