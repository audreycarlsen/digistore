App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("product", params.product_id);
  },

  actions: {
    addToCart: function(unique_product) {
      var store = this.store

      this.store.find("cart", localStorage.cartId).then(function(cart){
        var item = store.createRecord('item', {
          product: unique_product,
          quantity: 1,
          current_price: unique_product.get("price"),
          cart: cart
        });

        item.save().then(function () {
          cart.get("items").then(function(items) {
            items.pushObject(item);
          });
        });
      });
      this.transitionTo("cart");
    }
  }
});