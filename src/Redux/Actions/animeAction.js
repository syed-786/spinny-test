import axios from 'axios';

export const FETCH_ANIME_REQUEST = 'FETCH_ANIME_REQUEST';
export const FETCH_ANIME_SUCCESS = 'FETCH_ANIME_SUCCESS';
export const FETCH_ANIME_FAILURE = 'FETCH_ANIME_FAILURE ';
export const PAGE_RESET = 'PAGE_RESET';
export const SEARCH_TEXT = 'SEARCH_TEXT'
export const fetchAnimeRequest = () => {
    return {
        type:FETCH_ANIME_REQUEST
    }
}

export const fetchAnimeSuccess = data => {
    return {
        type: FETCH_ANIME_SUCCESS,
        payload: data
    }
}

export const fetchAnimeError = error => {
    return {
        type: FETCH_ANIME_FAILURE,
        payload: error
    }
}

export const pageReset = () => {
    return{
        type: PAGE_RESET,
    }
}

export const searchValue = (searchText) => {
    return{
        type: SEARCH_TEXT,
        payload: searchText
    }
}

export const fetchAnimeData = (page = 15, query ) => {
  console.log("fetchAnimeData -> query", query)
  console.log("fetchAnimeData -> limit", page)
    return (dispatch) => {
       dispatch(fetchAnimeRequest());
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=${page}`)
            .then(response => {
                const animeData = response.data.results;
                dispatch(fetchAnimeSuccess(animeData))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchAnimeError(errorMsg));
            })
    }
    
}