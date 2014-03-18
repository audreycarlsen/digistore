App.CartRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor("application");
  },

  actions: {
    more: function (item) {
      item.incrementProperty('quantity');
    },
    less: function (item) {
      var quantity = item.get('quantity');

      if (quantity > 1) {
        item.decrementProperty('quantity');
      }
    },
    removeFromCart: function(item) {
      this.store.find("cart", localStorage.cart_id).then(function(cart){
        cart.get("items").then(function(items) {
          items.removeObject(item);
        });
        item.deleteRecord();
      });
    }
  }
});