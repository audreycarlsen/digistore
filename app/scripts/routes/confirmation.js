App.ConfirmationRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order", params.order_id);
  }
});