export function formatDateString(dateString) {
  const dateParts = dateString.split('/')
  const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
  const timestamp = Date.parse(dateObject)
  const formattedDateString = new Date(timestamp).toISOString()

  return formattedDateString
}
