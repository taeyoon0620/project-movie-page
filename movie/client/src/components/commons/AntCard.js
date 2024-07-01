import React from 'react';
import { Col, Card } from 'antd';

const { Meta } = Card;

const AntCard = (props) => {

  if (props.landingPage) {
    // LANDING PAGE  처리 
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt={props.title}
                  src={props.path}
                />}
            >
              <Meta title={props.title} description="" />
            </Card>
          </a>
        </div>
      </Col>
    )

  } else {

    // [detail 처리] ===============================================

    return (

      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={
              <img
                alt={props.title}
                src={props.path}
              />}
          >
            <Meta title={props.castName} description="" />
          </Card>
        </div>
      </Col>
    )
  }
}

export default AntCard;
