import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('article-detail', {path: '/article-detail/:article_id'});
  this.route('admin');
});

export default Router;
