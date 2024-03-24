export function formatDate(date: string) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const day = ("0" + newDate.getDate()).slice(-2);
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  const hours = newDate.getHours() % 12 || 12;
  const minutes = newDate.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
