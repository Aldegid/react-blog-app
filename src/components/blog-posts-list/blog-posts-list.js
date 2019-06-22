import React, { Component } from 'react';
import BlogPost from '../blog-post';

import './blog-posts-list.css';

class BlogPostsList extends Component {
  render() {
    return (
      <div className='blog__container'>
        <BlogPost />
        <BlogPost />
      </div>
    );
  }
}

export default BlogPostsList;
