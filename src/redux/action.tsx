import jsHue from 'jshue';

const hue = jsHue();

export const ChangeLoading = (visibility: boolean) => ({
    type: "CHANGE_LOADING",
    payload: visibility
});

export const SearchForBridge = () => async (dispatch) => {
    dispatch(ChangeLoading(true))
    try {
        const bridges = await hue.discover();
        dispatch({
            type: "SEARCH_BRIDGE",
            payload: bridges
        });
    } catch (e) {

    } finally {
        dispatch(ChangeLoading(false));
    }
}
