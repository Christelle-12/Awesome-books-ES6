import { DateTime } from './luxon.js';

const showDateTime = () => {
  const now = DateTime.now();
  const Datetime = document.querySelector('.date-time');
  Datetime.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);
};

export default showDateTime;
