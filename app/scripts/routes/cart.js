App.CartRoute = Ember.Route.extend({
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
    remove: function (item) {
      item.decrementProperty('quantity');
    }
  }
});