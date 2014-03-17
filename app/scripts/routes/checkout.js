App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },
  actions: {
    purchase: function(proxy) {
      var self = this;
      var order = this.store.createRecord("order", proxy);

      self.store.find("cart", 1).then(function(cart){
        order.set("cart", cart);
      });

      order.save().then(function(order) {
        self.transitionTo('confirmation', order.get('id'));
      }, function(error) {
        order.deleteRecord().then(function(error) {
          alert(error.responseText);
        });
      });
    }
  }
});