import React from 'react';

export const Article = ({ title, date, snippet, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>date</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};
