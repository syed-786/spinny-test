import React, { PureComponent } from 'react'
import  './AnimeContainer.css';
import Header from '../headerComponent/header';
import { fetchAnimeData } from '../../Redux';
import { connect } from 'react-redux';
import AnimeList from '../animeListComponent/animeList';
import './AnimeContainer.css';
import loader from './loader.gif'

class AnimeContainer extends PureComponent {

    componentDidMount = () => {
        this.props.fetchAnimeData();
    }

    loadMoreHandler = () => {
        let {searchText, page} = this.props;
        this.props.fetchAnimeData(page, searchText);  
    }

    render() {
        const { animeDataList, isLoading } = this.props; 
    
        return (
            
            <div className = "container">
                <div className="sub-container">
                <Header />

            { isLoading ? 
               <img class='img-container' src ={loader}  alt='loading' />
                : 
                <AnimeList  animeDataList = {animeDataList}/>
            }

             <button className='load-button' onClick={this.loadMoreHandler}>Load more...</button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        animeDataList : state.animeData,
        isLoading : state.isLoading,
        page : state.page,
        searchText:state.searchText
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        fetchAnimeData : (page,query) => dispatch(fetchAnimeData(page,query)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnimeContainer);