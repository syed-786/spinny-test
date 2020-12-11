import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAnimeData,pageReset,searchValue } from '../../Redux';
import './header.css';

const Header = (props) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        setSearchText(event.target.value);
        }


        //this will dispatch action to search new data
    const search =(event) => {
        event.preventDefault();
        if(searchText === ''){
            alert("Please enter the search string");
            return;
        }
        dispatch(pageReset());  //this will reset page on every new search
        dispatch(searchValue(searchText)); 
        dispatch(fetchAnimeData(1,searchText, 16));
    }

    return (
        <div className='header-container'>
        <header className="header">
            <form onSubmit={search}>
                 <input type='text' value={searchText} onChange={onChangeHandler} />
                 <button className='button-container' onClick={search} >Go</button>
            </form>
        </header>
         <p className='url-text'>Requesting: {`https://api.jikan.moe/v3/search/anime?q=${searchText}`}</p>
         </div>
    )
}

export default React.memo(Header);