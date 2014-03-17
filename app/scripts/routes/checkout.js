App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy) {
      var self = this;
      var order = this.store.createRecord("order", proxy);

      self.store.find("cart", 'fixture-0').then(function(cart){
        order.set("cart", cart);
        order.save();
        cart.set("order", order);
        cart.save();
      });

      order.save().then(function(order) {
        self.transitionTo('confirmation', order.get('id'));
        localStorage.removeItem('cart_id');
        
        // var newCart = self.store.createRecord("cart");
        // newCart.save().then(function() {
        //   localStorage.cart_id = newCart.get('id');
        // });
      }, function(error) {
        order.deleteRecord().then(function(error) {
          alert(error.responseText);
        });
      });
    }
  }
});