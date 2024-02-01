export default function formatDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  // getMonth() returns month from 0-11. Add 1 to get the correct month number and pad it to ensure two digits
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}
