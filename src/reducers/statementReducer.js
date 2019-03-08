import constants from './../constants';
const { initialState, types } = constants;

const statementReducer = (state = initialState, action) => {
    console.log(state)
    return state;
};

export default statementReducer;