App.Router.map(function(){
  this.resource('products', { path: '/' }, function () {
    this.resource('product', { path: ":product_id" });
  });
  this.resource('cart');
  this.resource('checkout');
  this.resource('confirmation', { path: "order/:order_id" });
});