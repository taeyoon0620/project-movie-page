import React from 'react'
import { Col } from 'antd';

const GridCards = (props) => {

  // console.log(props)
  // console.log('props.landingPage', props.landingPage);

  if (props.landingPage) {
    // LANDING PAGE  처리 
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.castName}
            />
          </a>
        </div>
      </Col>
    )
  } else {

    // [detail 처리] ===============================================

    <Col lg={4} md={6} sm={12} xs={24}>
      <div>
        <img
          style={{ width: '100%' }}
          src={props.path}
          alt={props.castName}
        />
      </div>
    </Col>

  }
  /*
  ==============================================
  xs: 0 ~ 575px
  sm: 576 ~ 767px
  md: 768 ~ 991px
  lg: 992 ~ 1999px
  ==============================================
  */

  return (

    <Col lg={4} md={6} sm={12} xs={24}>
      <div>
        <a href={`/movie/${props.movieId}`}>
          <img
            style={{ width: '100%' }}
            src={props.path}
            alt={props.title}
          />
        </a>
      </div>
    </Col>
  )
}

export default GridCards