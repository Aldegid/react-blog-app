import React, { Component } from 'react';
import BlogPost from '../blog-post';
import Loader from '../loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../redux/posts';
import { withBlogService } from '../hoc';
import PostAddForm from '../post-add-form';
import ErrorIndicator from '../error-indicator';

import './blog-posts-list.css';

class BlogPostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  performPostDelete = id => {
    this.props.blogService
      .deletePost(id)
      .then(data => (data ? this.props.fetchPosts() : null));
  };

  render() {
    const { postsList, isLoaded, isLoggedOn, error } = this.props;
    if (!isLoaded) {
      return <Loader />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <React.Fragment>
        <PostAddForm />
        <div className='blog__container'>
          {postsList.map(post => {
            const { body, title, id } = post;
            const postPreview =
              post.body.length > 120 ? `${body.substr(0, 120)} ...` : body;
            const postTitle =
              title.length > 40 ? `${title.substr(0, 40)} ...` : title;

            return (
              <BlogPost
                key={id}
                title={postTitle}
                body={postPreview}
                id={id}
                performPostDelete={() => this.performPostDelete(id)}
                isLoggedOn={isLoggedOn}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({
  posts: { postsList, isLoaded, error },
  login: { isLoggedOn }
}) => {
  return {
    postsList,
    isLoaded,
    error,
    isLoggedOn
  };
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
