import React, { useState, useEffect } from "react";
import moment from 'moment';

import { EventWrapper, EventForm, Btn } from './event.style.js';

// SERVICES
import eventService from '../services/eventService';

function Event() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && !event) {
      getEventData();
    }
  });

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
      <EventForm>
        <input type="text" name="user_name" placeholder="user name"></input>
        <Btn>Submit</Btn>
      </EventForm>
    )
  }

  const renderEvent = () => {
    const {name, event_code, start, end} = event || {};
    return (
      <EventWrapper>
        {
          !!loading && <span className="processing">Processing Data...</span>
        }
        {
          !loading && 
          <div>
            {
              event_code && 
              <div>
                <h3 className="event__name">{name}</h3>
                <span className="period"> 
                Start: <strong>{moment(start).format('LLL')}</strong> - End: <strong>{moment(end).format('LLL')}</strong>
                </span>
                {renderEventForm()}
              </div>
            }
            {
              !event_code && <h3 className="no-data">Requested event not available</h3>
            }
          </div>
        }
      </EventWrapper>
    );
  };

  return renderEvent();
}

export default Event;
