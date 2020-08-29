import React, { useState, useEffect } from "react";
// import ReactJson from 'react-json-view';
import moment from 'moment';

// SERVICES
import eventService from './services/eventService';

function App() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && !event) {
      getEventData();
    }
  })

  async function getEventData() {
    setLoading(true);
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const event_code = urlParams.get('event');
    console.log(event_code);

    if (event_code) {
      let resData = await eventService.getEvent({
        event_code,
        date: moment()
      });
      console.log(resData.event);
      setEvent(resData.event);
    } else {
      setEvent({});
    }

    setLoading(false);
  }

  const renderEventForm = () => {
    return (
      <div>
        <input type="text" name="user_name"></input>
        <button>Submit</button>
      </div>
    )
  }

  const renderEvent = event => {
    const {name, event_code, start, end} = event || {};
    return (
      <div className="event">
        {
          !!loading && <span>Processing Data...</span>
        }
        {
          !loading && 
          <div>
            {
              event_code && 
              <div>
                <h3 className="event__name">Event: {name}</h3>
                <span className="period"> 
                Start: <strong>{moment(start).format('LLL')}</strong> - End: <strong>{moment(end).format('LLL')}</strong>
                </span>
                {renderEventForm()}
              </div>
            }
            {
              !event_code && <h3>Requested event not available</h3>
            }
          </div>
        }
      </div>
    );
  };

  return (
    <div className="App">
      <ul className="list1">
        {renderEvent(event)}
      </ul>
    </div>
  );
}

export default App;
