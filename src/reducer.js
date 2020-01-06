const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const changedState = { ...state }
  switch (action.type) {
    case 'GOOD':
      changedState.good += 1
      return changedState
    case 'OK':
      changedState.ok += 1
      return changedState
    case 'BAD':
      changedState.bad += 1
      return changedState
    case 'ZERO':
      return {good: 0, ok: 0, bad: 0}
    default: return state
  }
  
}

export default counterReducer