App.EditProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("product", params.product_id);
  },

  actions: {
    saveProduct: function(product) {
      product.save();
      alert("Your booty has been udpated.");
      this.transitionTo('admin');

    },
    deleteProduct: function(product) {
      alert("Are you sure? :(");
      product.deleteRecord();
      product.save();
      alert("This booty has been deleted.");
      this.transitionTo('admin');
    }
  }
});