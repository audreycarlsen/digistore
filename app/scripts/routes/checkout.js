App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy) {
      var self = this;

      this.controllerFor("application").get("cart").then(function (cart) {

        var order = self.store.createRecord("order", proxy);
        
        order.set("cart", cart);
        order.set("status", "Paid");

        order.save().then(function (order) {
          self.transitionTo('confirmation', order);
          localStorage.removeItem('cartId');
        
          var cart = self.store.createRecord("cart");

          cart.save().then(function (cartObject) {
            localStorage.cartId = cartObject.get('id');
            self.controllerFor("application").set("cart", self.store.find("cart", localStorage.cartId));
          });
        }, function (error) {
            order.deleteRecord();
            alert(error.responseText);
            self.transitionTo('checkout'); 
        });
      });
    }
  }
});