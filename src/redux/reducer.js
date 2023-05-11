import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: []
};

export default function rootReducer(state = initialState, { type, payload }) {

    const actions = {
        [ADD_FAV]: { ...state, myFavorites: [...state.myFavorites, payload] },
        [REMOVE_FAV]: { ...state, myFavorites: state.myFavorites.filter(({ id }) => id !== payload) },
    }

    return actions[type] ?? { ...state };
}