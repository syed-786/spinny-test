import { FETCH_ANIME_REQUEST,FETCH_ANIME_SUCCESS,FETCH_ANIME_FAILURE,PAGE_RESET,SEARCH_TEXT} from  '../Actions/animeAction';

const initialState = {
    animeData:[],
    isLoading: false,
    page:15,
    searchText: undefined,
    error:''
}

const animeReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ANIME_REQUEST : return {
            ...state,
            isLoading: true
        }
        case FETCH_ANIME_SUCCESS : return {
            ...state,
            isLoading: false,
            animeData: action.payload,
            page:state.page+16,
            error: ''
        }
        case PAGE_RESET : return {
            ...state,
            animeData:[],
            page:16
        }
        case SEARCH_TEXT : return {
            ...state,
            searchText: action.payload

        }
        case FETCH_ANIME_FAILURE : return {
            ...state,
            isLoading: false,
            animeData: [],
            error: action.payload
        }
        default : return state;
    }
}

export default animeReducer;