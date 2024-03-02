import { useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../UI/Modal';
import UpcomingSession from './UpcomingSession';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Session } from './SessionList';
import { cancelSession } from '../../store/session-slice';
import { RootState } from '../../store/store';

type UpcomingSessionsProps = {
    onClose: () => void;
}

function UpcomingSessions({onClose}: UpcomingSessionsProps) {

    const modal = useRef<ModalHandle>(null);
    const {upcomingSessions} = useSelector((state: RootState) => state.session);
    const dispatch = useDispatch();

    const hasSessions = upcomingSessions && upcomingSessions.length > 0;

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleCancelSession(id: string) {
        dispatch(cancelSession(id));
    }
    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            {hasSessions && (
                <ul>
                    {upcomingSessions.map((session: Session) => (
                        <li key={session.id}>
                            <UpcomingSession
                                session={session}
                                onCancel={() => handleCancelSession(session.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {!hasSessions && <p>No upcoming sessions.</p>}
            <p className="actions">
                <Button onClick={onClose}>Close</Button>
            </p>
        </Modal>
    );
}

export default UpcomingSessions;