

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = 1
        console.log(state)
        dispatch(setData(state))
    }
    return dataThunk
}