App.Router.map(function(){
  this.resource('products', { path: '/' }, function () {
    this.resource('product', { path: ":product_id" });
  });
  this.resource('cart');
});