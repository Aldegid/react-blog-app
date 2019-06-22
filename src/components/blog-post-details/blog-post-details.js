import React from 'react';

const BlogPostDetails = props => {
  console.log(props);
  return (
    <div className='post__details'>
      <h2 className='post__details-header'>Header</h2>
      <p className='post__details-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur
        laborum consequatur illum laudantium magni quam ut quia facere corporis
        reprehenderit officiis aut, ipsa suscipit quae facilis labore repellat
        ducimus.
      </p>
    </div>
  );
};

export default BlogPostDetails;
