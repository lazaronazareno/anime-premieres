export function formatDateString(dateTimeString) {
  /*   const dateParts = dateString.split('/')
  const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
  const timestamp = Date.parse(dateObject)
  const formattedDateString = new Date(timestamp).toISOString() */

  /*   const [dateString, timeString] = dateTimeString.split(' ')

  const dateParts = dateString.split('/')

  const year = parseInt(dateParts[2], 10)
  const month = parseInt(dateParts[1], 10) - 1
  const day = parseInt(dateParts[0], 10)

  const timeParts = timeString.split(':')

  let hour = parseInt(timeParts[0], 10)
  if (timeString.includes('PM')) {
    hour += 12
  }

  const minute = parseInt(timeParts[1], 10)
  const second = 0

  const dateObject = new Date(year, month, day, hour, minute, second)

  const formattedDateString = dateObject.toISOString()

  return formattedDateString */
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Argentina/Buenos_Aires'
  }

  const formattedDateString = dateTimeString.toLocaleDateString(
    'es-AR',
    options
  )

  return formattedDateString
}
