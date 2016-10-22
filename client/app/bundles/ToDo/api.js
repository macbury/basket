import axios from 'axios';
export default function() {
  return axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    }
  });
}
