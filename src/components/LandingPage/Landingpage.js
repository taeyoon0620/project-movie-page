import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../config';
import MainImage from './Section/MainImages';
import { Row } from 'antd';
import GridCards from '../GridCards/GridCards';

function Landingpage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const page = 1
    fetchMovies(page);
  }, []);

  // const loadMoreItems = () => {
  //   console.log('더보기 버튼 클릭')
  //   fetchMovies(2)
  //   };n

  const loadMoreItems = () => {
    console.log('더보기 버튼 클릭')
    fetchMovies(CurrentPage + 1)
  };
    
  return (
    <>
      <div style={{ width: '100%' }}>
        {/* Main Image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.title} 
            overview={MainMovieImage.overview}
          />
        )}

        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2>새로 나온 영화</h2>
          <hr />

          {/* Movie Grid Card */}
          <Row gutter={[10,10]}>
            {Movies.map(movie => {
              return (
              <React.Fragment key={movie.id}>
              <GridCards
                path={`${IMAGE_BASE_URL}w400${movie.poster_path}`} 
                title={movie.title}
                movieId={movie.id}
              />
            </React.Fragment>
              );
            })}
          </Row>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick = {loadMoreItems}>더보기</button>
      </div>
    </>
  );

  function fetchMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        //console.log(response.results);
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page);
      });
  }
}

export default Landingpage;
