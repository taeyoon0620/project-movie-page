import React from 'react';
import { Col } from 'antd';

const GridCards = (props) => {
    /*
    ======================
    xs: 0 ~ 575px
    sm: 576 ~ 767px
    md: 768 ~ 991px
    lg: 992 ~ 1199px
    ======================
    */ 
  
  return (
    // 
    <Col lg={4} md={6}sm={12} xs={24}>
      <div>
        <a href = {`movie/${props.movieId}`}>
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