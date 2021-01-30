import React from 'react';

export type FieldProps = {
    label: string;
    value: string | number;
    valueTestId?: string;
}

export const Field = ({ label, value, valueTestId }: FieldProps) => {
    return <div className='labelValue'>
        <p className='label'>{label}</p>
        <p className='value' data-testid={valueTestId}>{value}</p>
    </div>;
};
