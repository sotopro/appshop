import { BREADS } from '../../utils/data/breads';

const initialState = {
    breads: BREADS,
    filteredBread: [],
    selected: null
}

const BreadsReducer = (state = initialState, action) => {
    return state;
}

export default BreadsReducer;