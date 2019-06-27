import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { withBlogService } from '../hoc';

import './post-add-form.css';

class PostAddForm extends Component {
  state = {
    title: '',
    text: ''
  };

  handleChange = ({ target }) => {
    const currentTarget = target.name === 'postadd' ? 'text' : 'title';
    this.setState({
      [currentTarget]: target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.blogService
      .addPost(this.state.title, this.state.text)
      .then(data => (data ? this.props.fetchPosts() : null));
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
          onChange={this.handleChange}
          value={this.state.title}
          className='post_add-title post_add-item'
          placeholder='post title...'
        />
        <textarea
          name='postadd'
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
  )(PostAddForm)
);
