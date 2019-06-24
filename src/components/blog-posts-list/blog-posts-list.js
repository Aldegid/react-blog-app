import React, { Component } from 'react';
import BlogPost from '../blog-post';
import Loader from '../loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { withBlogService } from '../hoc';

import './blog-posts-list.css';

class BlogPostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    // console.log(this.props);
    const { posts, isLoaded } = this.props;
    if (!isLoaded) {
      return <Loader />;
    }
    return (
      <div className='blog__container'>
        {posts.map(post => {
          const postPreview =
            post.body.length > 150
              ? `${post.body.substr(0, 120)} ...`
              : post.body;
          const postTitle =
            post.title.length > 40
              ? `${post.title.substr(0, 40)} ...`
              : post.title;

          return (
            <BlogPost
              key={post.id}
              title={postTitle}
              body={postPreview}
              id={post.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = () => props => {
  return props;
};

const mapDispatchToProps = (dispatch, { blogService }) => {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts(blogService)
    },
    dispatch
  );
};

export default withBlogService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPostsList)
);
