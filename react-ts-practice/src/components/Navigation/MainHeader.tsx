import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import { useState } from 'react';
import UpcomingSessions from '../Sessions/UpcomingSessions';

const MainHeader = () => {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);
  
  function showUpcomingSession() {
    setUpcomingSessionsVisible(true);
  }
  function hideUpcomingSession() {
    setUpcomingSessionsVisible(false);
  }
  return (
    <header id='main-header'>
      {upcomingSessionsVisible && <UpcomingSessions onClose={hideUpcomingSession} />}
      <h1>Our Mission: Your Success</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={(isAction) => isAction ? 'active' : ''}>Our Mission</NavLink>
          </li>
          <li>
            <NavLink to='sessions' className={(isAction) => isAction ? 'active' : ''}>Browse Sessions</NavLink>
          </li>
          <li>
            <Button onClick={showUpcomingSession}>Upcoming Sessions</Button>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default MainHeader;