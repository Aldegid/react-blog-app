import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './blog-post.css';

const BlogPost = ({ title, body, id, history }) => {
  console.log(id, 'in Blog Post');
  return (
    <div className='blog__item'>
      <h2 className='blog__item-header'>{title}</h2>
      <p className='blog__item-content'>{body}</p>
      <button
        className='blog__button'
        onClick={() => history.push(`/blog/posts/${id}`)}
      >
        Read More
      </button>
    </div>
  );
};

export default withRouter(BlogPost);
