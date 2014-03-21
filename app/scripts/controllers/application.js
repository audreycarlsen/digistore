App.ApplicationController = Ember.ObjectController.extend({
  cart: null,
  init: function () {
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord("cart");
      cart.save().then(function(cartObject) {
        localStorage.cartId = cartObject.get('id');
      });
    }
    
    var cart = this.store.find("cart", localStorage.cartId);

    this.set("cart", cart)
  }
});