import React from 'react';

import './blog-post.css';

const BlogPost = ({ title }) => {
  return (
    <div className='blog__item'>
      <h2 className='blog__item-header'>{title}</h2>
      <p className='blog__item-content'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ex
        laudantium quaerat, blanditiis minima consectetur delectus nobis qui
        tempore.
      </p>
      <button className='blog__button'>Read more</button>
    </div>
  );
};

export default BlogPost;
