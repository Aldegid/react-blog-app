import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBlogService } from '../hoc';
import { bindActionCreators } from 'redux';
import { fetchPostDetails } from '../actions';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

import './blog-post-details.css';

class BlogPostDetails extends Component {
  state = {
    inputValue: ''
  };

  onCommentAdd = e => {
    e.preventDefault();
    const { id, fetchPostDetails } = this.props;

    const postId = parseInt(id);

    this.props.blogService
      .addComment(postId, this.state.value)
      .then(data => (data ? fetchPostDetails(id) : null));
    this.setState({ value: '' });
  };

  onHandleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  componentDidMount() {
    this.props.fetchPostDetails(this.props.id);
  }

  render() {
    const { post, error } = this.props;

    if (!post) {
      return <Loader />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <div className='post__details'>
        <h2 className='post__details-header'>{post.title}</h2>
        <p className='post__details-content'>{post.body}</p>
        <h3>Comments:</h3>
        <ul className='post__details-list'>
          {post.comments.map(comment => (
            <li className='post__details-item' key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
        <form onSubmit={this.onCommentAdd}>
          <textarea
            name='comment'
            id='comment'
            value={this.state.value}
            onChange={this.onHandleChange}
            className='post__details-textarea'
            required
          />
          <button className='post__details-button'>Add Comment</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ post, error }) => {
  return { post, error };
};

const mapDispatchToProps = (dispatch, { blogService }) => {
  return bindActionCreators(
    {
      fetchPostDetails: fetchPostDetails(blogService)
    },
    dispatch
  );
};

export default withBlogService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPostDetails)
);
