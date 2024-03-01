import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({id, label, ...otherProps}: InputProps, ref) {
    
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...otherProps} ref={ref} />
        </p>
    );
});

export default Input;