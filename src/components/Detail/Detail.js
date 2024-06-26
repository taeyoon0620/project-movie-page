import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../components/config';
import MainImage from '../LandingPage/Section/MainImages';
import MovieInfo from './MovieInfo';
import { Button } from 'antd';
import GridCards from '../GridCards/GridCards';
import { Row } from 'antd';

const Detail = () => {
  const { movieId } = useParams();
 // console.log(movieId);

//// [state] ==================================================================
const [Movie, setMovie] = useState({});
const [Casts, setCasts] = useState([]);

useEffect(() => {
  //console.log('페이지가 로드되면, 실행됩니다')

    //// [특정 영화 정보] URL
    // let endpointInfo = ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    //console.log(endpointInfo)

    ///// [출연진 ] URL
    // 'https://api.themoviedb.org/3/credit/credit_id?api_key=${API_KEY}`;'
    let endpointCrew = `${API_URL}&{movieId}/credits?api_key=${API_KEY}`
    //console.log(endpointCrew)

    // [특정 영화 정보] 영화 아이디로 정보 요청
    fetch(endpointInfo)
      .then(response => response.json())
      .then(obj => {
        //console.log(obj)
        setMovie(obj)
      })

    //// [출연진] 영화 배우 정보 요청

    fetch(endpointCrew)
    .then(response => response.json())
    .then(obj => {
      console.log(obj)
      setCasts(obj)

    })
  
  }, []);

  return ( 
    <>
      {/* Header */}
      {Movie &&
      <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          title={Movie.title} 
          overview={Movie.overview}
      />
    }

      {/* Body */}
      <div style = {{ width: '85%', margin: '20px auto' }}>
        {/* Movie Info */}
        <MovieInfo movie={Movie} />

        <br />

        {/* Actors Grid */}
        <div style={{ textAlign: 'center' }}>
        <Button>배우 목록</Button>
        </div>

        <Row gutter={[10,10]}>
            {Casts.map(cast => {
              return (

                
              <React.Fragment key={cast.id}>
                <GridCards
                  path={`${IMAGE_BASE_URL}w400${cast.profile_path}`} 
                  caseName={cast.name}
              />
              </React.Fragment>
              );
            })}
          </Row>

      </div>

    </>
  )
}

export default Detail;