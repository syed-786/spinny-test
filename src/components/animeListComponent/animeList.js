import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './animeList.css'
const AnimeList = (props) => {
    const {animeDataList} = props;

    const animeList = animeDataList.length ? animeDataList.map(data => {
            return (
                    <Row>
                        <Col className='anime-card' key={data.mal_id}>
                            <img className='anime-image' src={data.image_url} alt='img'/>
                            <div className='anime-name'>{data.title}</div>
                        </Col>
                    </Row>
                    // {/* <div key={data.mal_id}>{data.title}</div> */}
                
            )
         })
         : 
            <h1>No Data Found...</h1>

    return (
        <>
            <Container className='container-list'>
                {animeList}
            </Container>
        </>
    )
}


export default AnimeList;