App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("product", params.product_id);
  },

  actions: {
    addToCart: function(unique_product) {
      var newItem = this.store.createRecord('item', {
        product: unique_product,
        quantity: 1,
        current_price: unique_product.get("price")
      });

      this.store.find("cart", 1).then(function(cart){
        newItem.set("cart", cart);
        newItem.save();
        cart.get("items").then(function(items) {
          items.pushObject(newItem);
        });
      });
      this.transitionTo("cart");
    }
  }
});