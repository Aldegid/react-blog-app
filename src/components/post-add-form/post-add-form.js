import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../redux/posts';
import { withBlogService } from '../hoc';

import './post-add-form.css';

class PostAddForm extends Component {
  state = {
    title: '',
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = async e => {
    const { title, text } = this.state;
    const { blogService, fetchPosts } = this.props;
    e.preventDefault();
    await blogService.addPost(title, text);
    fetchPosts();
    this.setState({
      title: '',
      text: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='post__add'>
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
          value={this.state.title}
          className='post_add-title post_add-item'
          placeholder='post title...'
        />
        <textarea
          name='text'
          onChange={this.handleChange}
          value={this.state.text}
          className='post_add-textarea'
          placeholder='type you text here'
        />
        <button className='post_add-button post_add-item'>Add new post</button>
      </form>
    );
  }
}

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
    null,
    mapDispatchToProps
  )(PostAddForm)
);
