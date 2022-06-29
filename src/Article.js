import React from 'react';
import moment from 'moment';

export const Article = ({ title, date, snippet, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('MMMM ddd Do YYYY')}</span>
        <span>{length} min read </span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};
