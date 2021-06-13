import { Event } from '../types/event'
import DateFormatter from './date-formatter'

type EventProps = {
  event: Event
}

type CalendarProps = {
  events: Event[]
}

const EventBox = ({ event }: EventProps) => {
  return (
    <div className="inline-block p-4 border rounded border-current">
      <div>{event.name}</div>
      <div>
        Starts: <DateFormatter dateString={event.start} />
      </div>
      <div>
        Ends: <DateFormatter dateString={event.end} />
      </div>
    </div>
  )
}

const Calendar = ({ events }: CalendarProps) => {
  return (
    <>
    {events.map((event) => (
      <EventBox event={event} />
    ))}
    </>
  )
}

export default Calendar
