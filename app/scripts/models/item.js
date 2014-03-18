App.Item = DS.Model.extend({
  current_price: DS.attr("number"),
  quantity:      DS.attr("number"),
  cart:          DS.belongsTo("cart",    {async: true}),
  product:       DS.belongsTo("product", {async: true}),
  subtotal: function(){
    return this.get('quantity') * this.get('current_price');
  }.property('quantity', 'current_price')
});
