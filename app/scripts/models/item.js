App.Item = DS.Model.extend({
  price:    DS.attr("number"),
  quantity: DS.attr("number"),
  cart:     DS.belongsTo("cart", {async: true}),
  product:  DS.belongsTo("product", {async: true})
});

App.Item.FIXTURES = [
  {
    id:       1,
    price:    5000,
    quantity: 1,
    cart:     1,
    product:  1
  }, {
    id:       2,
    price:    275,
    quantity: 2,
    cart:     1,
    product:  2
  }
]