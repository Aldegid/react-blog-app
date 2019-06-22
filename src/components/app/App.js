import React, { Component } from 'react';

import BlogHeader from '../blog-header';
import Dummy from '../dummy';
import BlogPostsList from '../blog-posts-list';
import BlogPostDetails from '../blog-post-details';

import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BlogHeader />
        <Switch>
          <Route path='/' component={Dummy} exact />
          <Route path='/blog' component={BlogPostsList} exact />
          <Route
            path='/blog/post/:id'
            render={({ match }) => {
              console.log(match);
              const { id } = match.params;
              return <BlogPostDetails id={id} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
