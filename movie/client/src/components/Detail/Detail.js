import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './MovieInfo';
import { Button } from 'antd';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import AntCard from '../commons/AntCard';


function Detail() {
  const navigate = useNavigate()
  const { movieId } = useParams();
  // console.log('movieId >> ', movieId);

  // [state] ======================================
  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);

  const [CrewToggle, setCrewToggle] = useState(false);
  const [ActorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    // console.log('페이지가 로드되면, 실행됩니다.');

    //// [특정 영화 정보 URL]
    // let endpointInfo = `https://api.themoviedb.org/3/movie/${movieId}`;
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    // console.log(endpointInfo);

    //// [ 출연진 ] URL
    // https://api.themoviedb.org/3/movie/movie_id/credits?api_key=
    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;
    console.log('출연진', endpointCrew);

    //// [특정 영화 정보] 영화 아이디로 정보 요청
    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        setMovie(response)
      });

    //// [영화 배우 정보 요청]
    fetch(endpointCrew)
      .then(response => response.json())
      .then(obj => {
        console.log(obj)
        setCasts(obj.cast)
      });

    //// [제작진 목록]

  }, []);

  // 버튼 핸들러 == =====================================
  function toggleActorView() {
    // console.log('버튼 클릭!!!')
    setActorToggle(!ActorToggle)

    // console.log('ActorToggle 상태 >> ', ActorToggle)
  }

  function toggleCrewView() {

    setCrewToggle(!CrewToggle)
  }




  return (
    // <div>Detail</div>
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
      <div style={{ width: '85%', margin: ' 20px auto ' }}>


        {/* 영화목록 버튼*/}
        <div style={{ textAlign: 'center', marginTop: '60px 0' }}>
          <Button onClick={() => navigate(-1)}>영화 목록</Button>
        </div>
        {/* navigate(-1) = 이전페이지로 돌아가기 */}



        {/* Movie Info */}
        <MovieInfo movie={Movie} />

        <br />

        {/* Actor Grid */}
        <div style={{ display: 'flex', justifyContent: 'center',  margin: '20px 0' }}>
          <Button onClick={toggleActorView}>배우 목록</Button>
          <Button style={{ marginLeft: '15px' }}Button onClick={toggleCrewView}>제작진 목록</Button>
        </div>

        {ActorToggle &&
          <Row gutter={[10, 10]}>
            {Casts.map(cast => {
              return (
                <React.Fragment key={cast.id} >
                  {cast.profile_path &&
                    <AntCard
                      path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                      castName={cast.name}
                    />
                  }
                </React.Fragment>
              );
            })}
          </Row>
        }
      </div>
    </>
  )
}

export default Detail