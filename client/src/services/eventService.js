import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/getEvents`);
    return res.data || [];
  }
}