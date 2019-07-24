import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/app';
import store from './store';

import { BlogServiceProvider } from './components/blog-service-context';

import BlogService from './services/blog-service';
const blogService = new BlogService();

ReactDOM.render(
  <Provider store={store}>
    <BlogServiceProvider value={blogService}>
      <Router>
        <App />
      </Router>
    </BlogServiceProvider>
  </Provider>,
  document.getElementById('root')
);
