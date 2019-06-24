import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBlogService } from '../hoc';
import { bindActionCreators } from 'redux';
import { fetchPostDetails } from '../actions';

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

  onHandleChange = e => {
    this.setState({ value: e.target.value });
  };

  componentDidMount() {
    this.props.fetchPostDetails(this.props.id);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return 'Loading';
    }
    return (
      <div className='post__details'>
        <h2 className='post__details-header'>{post.title}</h2>
        <p className='post__details-content'>{post.body}</p>
        <ul>
          {post.comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
        <form onSubmit={this.onCommentAdd}>
          <textarea
            name='comment'
            id='comment'
            value={this.state.value}
            onChange={this.onHandleChange}
          />
          <button>Add Comment</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
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
