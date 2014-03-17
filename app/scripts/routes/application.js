App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    localStorage.removeItem('cart_id');
    if (typeof(localStorage.cart_id) === "undefined") {
      var newCart = this.store.createRecord("cart");
      newCart.save().then(function() {
        localStorage.cart_id = newCart.get('id');
      });
    }
  }
});