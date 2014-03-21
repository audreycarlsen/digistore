App.ManageOrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  },

  actions: {
    saveOrder: function(order) {
      order.save();
      alert("Status has been updated.");
      this.transitionTo('manageOrders');
    }
  }
});