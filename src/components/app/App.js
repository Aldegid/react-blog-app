import React from 'react';

import BlogHeader from '../blog-header';
import Home from '../home';
import BlogPostsList from '../blog-posts-list';
import BlogPostDetails from '../blog-post-details';
import Login from '../login';

import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <BlogHeader />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/posts' component={BlogPostsList} exact />
        <Route path='/login' component={Login} />
        <Route
          path='/posts/:id'
          render={({ match }) => {
            const { id } = match.params;
            return <BlogPostDetails id={id} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
