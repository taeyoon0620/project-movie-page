import React, { children } from 'react'
import { Badge, Descriptions } from 'antd';

const MovieInfo = (props) => {
  //console.log(props)
  const { movie } = props;

  const items = [
    {key: '1', label: 'Title', children : `${movie.title}`},
    {key: '2', label: 'Release Date', children : `${movie.release_date}`},
    {key: '3', label: 'revenue', children : `${movie.revenue}`},
    {key: '4', label: 'Runtime', children : `${movie.Runtime}`},
    {key: '5', label: 'Vote_average', children : `${movie.Vote_average}`},
    {key: '6', label: 'Vote_Count', children : `${movie.Vote_Count}`},
    {key: '7', label: 'Status', children : `${movie.Status}`},
    {key: '8', label: 'Popularity', children : `${movie.Popularity}`},
    {key: '9', label: 'Budget', children : `${movie.Budget}`},
  ];


  return (
    <Descriptions title="" bordered items={items} />
  )

}

export default MovieInfo;