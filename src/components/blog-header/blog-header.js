import React from 'react';

import { Link } from 'react-router-dom';

import './blog-header.css';

const BlogHeader = () => {
  return (
    <header className='main__header'>
      <Link to='/' className='logo'>
        Cool Story Blog
      </Link>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  );
};

export default BlogHeader;
