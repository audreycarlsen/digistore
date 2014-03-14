App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord("order");
  }
});