Ember.Handlebars.helper('to_dollars', function(price) {
  return (parseFloat(price) / 100).toFixed(2);
});