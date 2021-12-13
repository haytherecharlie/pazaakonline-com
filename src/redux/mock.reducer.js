// Default State
const DS = {}

// Actions
const A = {
  TOGGLE: {
    type: "TOGGLE",
  },
}

// Reducer
export default function mockReducer(state = DS, action) {
  switch (action.type) {
    case A.TOGGLE:
      return state
    default:
      return state
  }
}
