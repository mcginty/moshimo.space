import { AIRTABLE_BASE, AIRTABLE_TABLE } from './constants';
import { Event, State } from '../types/event';
import Airtable from 'airtable';

const base = Airtable.base(AIRTABLE_BASE);

export async function getEvents() {
  let records = await base(AIRTABLE_TABLE).select({
    maxRecords: 100,
    view: "Future",
  }).firstPage()

  let events = records.map((record) => {
    const fields: any = record.fields
    //console.debug(fields)
    const event: Event = {
      name: fields.Name,
      state: fields.State,
      start: fields.Start,
      end: fields.End,
    }
    return event
  })
  return events
}

export async function getApprovedEvents() {
  let allEvents = await getEvents()
  return allEvents.filter(event => event.state === State.Approved)
}
