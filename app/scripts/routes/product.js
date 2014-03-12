App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("product", params.product_id);
  },

  actions: {
    addToCart: function(unique_product) {
      var theCart = this.controllerFor('cart').get('model');
      var newItem = this.store.createRecord('item', { cart: theCart, product: unique_product, quantity: 1 });
      newItem.save();
      theCart.get("items").then(function(items) {
        items.pushObject(newItem);
      })
    }
  },

  setupController: function(controller, model) {
    this.controllerFor('cart').set('model', this.store.find('cart', 1));
    controller.set('model', model);
  }
});