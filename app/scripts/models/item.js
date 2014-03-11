App.Item = DS.Model.extend({
  current_price: DS.attr("number"),
  quantity:      DS.attr("number"),
  cart:          DS.belongsTo("cart",    {async: true}),
  product:       DS.belongsTo("product", {async: true})
});

App.Item.FIXTURES = [
  {
    id:            1,
    current_price: 5000,
    quantity:      1,
    cart:          1,
    product:       1
  }, {
    id:            2,
    current_price: 275,
    quantity:      2,
    cart:          1,
    product:       2
  }
]