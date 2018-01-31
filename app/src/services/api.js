import axios from 'axios';
import { apiUri } from '../config/paths';

export default class Api {
  static async fetchLabels() {
    const response = await axios.get(`${apiUri}labels/`);
    return response.data.data;
  }

  static async fetchNotes() {
    const response = await axios.get(`${apiUri}notes`);
    return response.data.data;
  }
}
