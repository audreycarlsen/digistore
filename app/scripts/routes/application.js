App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    if (typeof(localStorage.cart_id) === "undefined") {
      var newCart = this.store.createRecord("cart");
      newCart.save().then(function() {
        localStorage.cart_id = newCart.get('id').then(function() {
          return this.store.find("cart", localStorage.cart_id);
        });
      });
    }
  }
});