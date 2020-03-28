export function formatDate(date: Date): string {
  console.log(typeof date)
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ]

  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
}