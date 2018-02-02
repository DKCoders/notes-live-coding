import axios from 'axios';
import { apiUri } from '../config/paths';

export default class Api {
  static async fetchLabels() {
    const response = await axios.get(`${apiUri}labels/`);
    return response.data.data;
  }

  static async saveLabel(label) {
    const response = label && label._id
      ? await axios.put(`${apiUri}labels/${label._id}`, label)
      : await axios.post(`${apiUri}labels`, label);
    return response.data.data;
  }

  static async fetchNotes() {
    const response = await axios.get(`${apiUri}notes`);
    return response.data.data;
  }

  static async saveNote(note) {
    const response = note && note._id
      ? await axios.put(`${apiUri}notes/${note._id}`, note)
      : await axios.post(`${apiUri}notes`, note);
    return response.data.data;
  }

  static async deleteNote(noteId) {
    const response = await axios.delete(`${apiUri}notes/${noteId}`);
    return response.data;
  }
}
