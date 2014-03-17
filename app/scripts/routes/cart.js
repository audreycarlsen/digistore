App.CartRoute = Ember.Route.extend({
  beforeModel: function() {
    if (typeof localStorage.cart_id === 'undefined') {
      this.store.createRecord("cart");
    }
  },

  model: function () {
    return this.store.find("cart", 1);
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
      this.store.find("cart", 1).then(function(cart){
        cart.get("items").then(function(items) {
          items.removeObject(item);
        });
        item.deleteRecord();
      });
    }
  }
});