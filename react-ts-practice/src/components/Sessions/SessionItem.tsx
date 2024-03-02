import { FC } from 'react';
import { Session } from './SessionList';
import Button from '../UI/Button';

const SessionItem: FC<Session> = ({image, title, summary, id}) => {
    return (
        <article className='session-item'>
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <Button to={id}>Learn More</Button>
                </p>
            </div>
        </article>
    );
};

export default SessionItem;