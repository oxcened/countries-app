import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockedCountry from '../assets/mock/mockedCountry.json';
import myAxios from './utils/axios';
import { CountryDetail } from './containers/CountryDetail/CountryDetail';

jest.mock('./utils/axios');
const mAxios = myAxios as jest.Mocked<typeof myAxios>;

test('renders country name in country detail', async () => {
    mAxios.get.mockResolvedValueOnce({ data: mockedCountry });

    render(
        <BrowserRouter>
            <CountryDetail />
        </BrowserRouter>
    );

    const countryName = await screen.findByTestId('countryName');
    expect(countryName).toHaveTextContent(mockedCountry.name);
});
