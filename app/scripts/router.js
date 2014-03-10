App.Router.map(function(){
  this.resource('products', { path: '/' }),
  this.resource('product', { path: ":product_id" })
});