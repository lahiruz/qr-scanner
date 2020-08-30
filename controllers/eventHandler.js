const Event = require('../models/Event');
const uuid = require('uuid');
const moment = require('moment');

module.exports.getEvents = async function(req, res) {
  try {
    let events = await Event.find();
    return res.status(200).send(events);
  } catch(e) {
    return res.status(500).send({
      error: true,
      data: e
    });
  }
}

module.exports.createEvent = async function(req, res) {
  try {
    let {event_code, user} = await Event.create({...req.body, event_code: uuid.v1()});
    return res.status(201).send({
      error: false,
      event: {
        event_code, user
      }
    });
  } catch(e) {
    return res.status(500).send({
      error: true,
      data: e
    });
  }
}

module.exports.updateEvent = async function(req, res) {
  try {
    const {id} = req.params;
    let event = await Event.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      error: false,
      event
    });
  } catch (e){
    return res.status(500).send({
      error: true,
      data: e
    });
  }
}

module.exports.deleteEvent = async function(req, res) {
  try {
    const {id} = req.params;
    let event = await Event.findByIdAndDelete(id);
    return res.status(200).send({
      error: false,
      event
    });
  } catch (e){
    return res.status(500).send({
      error: true,
      data: e
    });
  }
}

module.exports.getEvent = async function(req, res) {
  try {
    const {event_code, date} = req.body;
    const query = {
      event_code
      // start: {
      //   $gte: date
      // },
      // end: {
      //   $lte: date
      // },
    };
    const results = await Event.find(query);
    let resData = {};
    if (results.length) {
      const eventData = results[0];
      if (moment(date).isBetween(moment(eventData.start), moment(eventData.end), undefined, "[]")){
        resData = eventData;
      }
    }
  
    return res.status(200).send({
      error: false,
      event: resData
    });
  } catch (e){
    return res.status(500).send({
      error: true,
      data: e
    });
  }
}

