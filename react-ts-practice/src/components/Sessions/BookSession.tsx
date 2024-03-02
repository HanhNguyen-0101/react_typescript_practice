import React, { FormEvent, useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../UI/Modal';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { type Session } from './SessionList';
import { useDispatch } from 'react-redux';
import { bookSession } from '../../store/session-slice';

type BookSessionProps = {
    session: Session;
    onDone: () => void;
}

function BookSession({ session, onDone }: BookSessionProps) {
    const modal = useRef<ModalHandle>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log('form data', data);
        dispatch(bookSession(session));
        onDone();
    }
    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
                <p className="actions">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button type='submit'>Book Session</Button>
                </p>
            </form>
        </Modal>
    );
}

export default BookSession;