import Ember from 'ember';

export function checkId(params) {
  var featureId = params[0];
  var articleId = params[1];
  if (featureId === articleId) {
    return false;
  } else {
    return true;
  }
  return params;
}

export default Ember.Helper.helper(checkId);
