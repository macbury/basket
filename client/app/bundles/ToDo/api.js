import axios from 'axios';
const token = document.querySelector('meta[name="csrf-token"]').content;
export default axios.create({
  headers: {
    'X-CSRF-Token': token,
    'X-Requested-With': 'XMLHttpRequest',
  }
});
