
enum State {
  Approved = "Approved",
  Proposed = "Proposed",
}

type Event = {
  name: string
  state: string
  start: string
  end: string
}

export default Event
