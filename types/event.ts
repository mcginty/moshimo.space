
export enum State {
  Approved = "Approved",
  Proposed = "Proposed",
}

export type Event = {
  name: string
  state: State
  start: string
  end: string
}
