import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/getEvents`);
    return res.data || [];
  },
  getEvent: async (data) => {
    let res = await axios.post(`/getEvent`, data);
    return res.data || [];
  }
}
