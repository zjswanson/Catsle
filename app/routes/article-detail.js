import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      featureArticle: this.store.findRecord('article', params.article_id),
      allArticles: this.store.findAll('article')
    });
  }
});
