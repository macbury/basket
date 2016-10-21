import axios from 'axios';
export default function() {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  console.log(token);
  return axios.create({
    headers: {
      'X-CSRF-Token': token,
      'X-Requested-With': 'XMLHttpRequest',
    }
  });
}
