const CHANGE_FILTER = 'CHANGE_FILTER';

const initState = {
    currentFilter: 'all'
};

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return {
                ...state,
                currentFilter: action.activeFilter
            }
        }
        default:
            return state
    }
};

export const changeFilter = (activeFilter) => ({type: CHANGE_FILTER, activeFilter})

export default filtersReducer;