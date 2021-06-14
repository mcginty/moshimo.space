
export enum State {
  Approved = "Approved",
  Proposed = "Proposed",
}

export type Event = {
  id: string
  name: string
  state: State
  start: string
  end: string
}
