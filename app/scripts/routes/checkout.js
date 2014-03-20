App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy) {
      var self = this;
      var order = this.store.createRecord("order", proxy);
      self.store.find("cart", localStorage.cartId).then(function(cart){

        order.set("cart", cart);
        order.set("status", "paid");

        order.save().then(function(order) {
          self.transitionTo('confirmation', order.get('id'));
          localStorage.removeItem('cartId');
        
          var cart = self.store.createRecord("cart");
          cart.save().then(function(cartObject) {
            localStorage.cartId = cartObject.get('id');
            return cartObject;
          });
        }, function(error) {
            order.deleteRecord();
            order.save();
            alert("There was a problem processing your order.");
            self.transitionTo('checkout'); 
        });
      });
    }
  }
});