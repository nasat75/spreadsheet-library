export function getUpdatedCalander(e: GoogleAppsScript.Events.CalendarEventUpdated): void {
  try {
    console.log('Event')
    console.log(e)
    const calander = CalendarApp.getCalendarById(e.calendarId)

    const today = new Date()
    const next = new Date()
    next.setMonth(next.getMonth() + 2)

    const events = calander.getEvents( today, next )

    events.forEach(event => {
      console.log(event.getTitle())
    })
  } catch (err) {
    console.log('Error')
    console.log(err)
  }
}
