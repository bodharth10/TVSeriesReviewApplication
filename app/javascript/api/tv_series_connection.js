import axios from "axios";

const baseDomain = document.getElementsByName('base')[0].getAttribute('content');
const baseUrl = baseDomain + "api/";
const csrfToken = document.getElementsByName('csrf-token')[0].getAttribute('content');
const firestormToken = document.getElementsByName('firestorm')[0].getAttribute('content');

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/vnd.firestorm+json;version=1',
    'X-CSRF-Token': csrfToken
  }
});

export default api;
