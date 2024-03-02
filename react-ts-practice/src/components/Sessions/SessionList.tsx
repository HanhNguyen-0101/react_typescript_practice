import { FC } from 'react';
import SessionItem from './SessionItem';

export type Session = {
    id: string,
    title: string,
    summary: string,
    description: string,
    duration: number,
    date: string,
    image: string,
}

type SessionList = {
    sessions: Session[];
}

const SessionList: FC<SessionList> = ({ sessions }) => {
    return (
        <ul id='sessions-list'>
            {sessions.map(session => <li key={session.id}>
                <SessionItem {...session}  />
            </li>)}
        </ul>
    );
};

export default SessionList;