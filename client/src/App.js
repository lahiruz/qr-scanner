import React, { useState, useEffect } from "react";
import ReactJson from 'react-json-view';

// SERVICES
import eventService from './services/eventService';

function App() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if(!events) {
      getEvents();
    }
  })

  const getEvents = async () => {
    let res = await eventService.getAll();
    console.log(res);
    setEvents(res);
  }

  const renderEvent = event => {
    return (
      <li key={event._id} className="list__item event">
        <h3 className="event__name">{event.name}</h3>
        <ReactJson src={event} />
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list1">
        {(events && events.length > 0) ? (
          events.map(event => renderEvent(event))
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
