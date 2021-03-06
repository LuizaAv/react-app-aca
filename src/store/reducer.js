import { 
    REMOVE_ALL_BOOKMARKS, ADD_BOOKMARK, REMOVE_BOOKMARK
} from './actions';

const initialState = {
    bookmarks: [],
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            }
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(
                    bookmark => bookmark.alpha2Code !== action.payload
                ),
            }
        case REMOVE_ALL_BOOKMARKS:
            return {
                ...state,
                bookmarks: [],
            }
        default: 
            return state;
    }
}
