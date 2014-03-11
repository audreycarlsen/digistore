App.Item = DS.Model.extend({
  cart:    DS.belongsTo("cart", {async: true});
  product: DS.belongsTo("product", {async: true});
});