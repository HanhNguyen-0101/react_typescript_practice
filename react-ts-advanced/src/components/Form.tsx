import { ComponentPropsWithoutRef, type FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (values: unknown) => void
}

const Form = forwardRef(function Form({ onSave, ...props }: FormProps, ref) {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...props} ref={form}>
            {props.children}
        </form>
    );
})

export default Form;