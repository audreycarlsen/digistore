App.CartRoute = Ember.Route.extend({
  model: function () {
    return this.controllerFor("application").get("cart");
  },

  actions: {
    more: function (item) {
      item.incrementProperty('quantity');
      item.save();
    },
    less: function (item) {
      var quantity = item.get('quantity');

      if (quantity > 1) {
        item.decrementProperty('quantity');
      }

      item.save();
    },
    removeFromCart: function(item) {
      this.store.find("cart", localStorage.cartId).then(function(cart){
        cart.get("items").then(function(items) {
          items.removeObject(item);
          item.deleteRecord();
          item.save();
        });
      });
    }
  }
});