import { ComponentPropsWithoutRef, FC } from 'react';

type InputProps = {
    label: string,
    id: string,
} & ComponentPropsWithoutRef<'input'>

const Input: FC<InputProps> = ({ label, id, ...props }) => {
    return (
        <p className='control'>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    );
};

export default Input;