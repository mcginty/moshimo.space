import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { AIRTABLE_BASE, AIRTABLE_TABLE } from './constants';
import Event from '../types/event';
import Airtable from 'airtable';

const postsDirectory = join(process.cwd(), '_posts')
const base = Airtable.base(AIRTABLE_BASE);

export async function getEvents() {
  let records = await base(AIRTABLE_TABLE).select({
    maxRecords: 100,
    view: "Future",
  }).firstPage()

  let events = records.map((record) => {
    const fields: any = record.fields
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

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
