import React from 'react';
import { withRouter } from 'react-router-dom';

import './blog-post.css';

const DeletePostButton = ({ performPostDelete }) => {
  return (
    <button
      className='blog__button blog__button-del'
      onClick={performPostDelete}
    >
      Delete Post
    </button>
  );
};

const BlogPost = ({
  title,
  body,
  id,
  history,
  performPostDelete,
  isLoggedOn
}) => {
  return (
    <div className='blog__item'>
      <h2 className='blog__item-header'>{title}</h2>
      <p className='blog__item-content'>{body}</p>
      <div className='btn-group'>
        {isLoggedOn ? (
          <DeletePostButton performPostDelete={performPostDelete} />
        ) : null}

        <button
          className='blog__button'
          onClick={() => history.push(`/posts/${id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default withRouter(BlogPost);
