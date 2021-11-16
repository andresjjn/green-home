export const waterStateReducer = (state = false, action) => {
    const { type } = action;
    if (type   === 'WATER_STATE') return state + action.payload
    return state
}
