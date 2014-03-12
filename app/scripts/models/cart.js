App.Cart = DS.Model.extend({
  items: DS.hasMany("item", {async: true}),
  total: function(){
    var items = this.get('items');

    var subtotals = items.map(function(item) {
      return item.get('subtotal');
    });

    var total = subtotals.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    return total;

  }.property('items.@each.subtotal')
});

App.Cart.FIXTURES = [
  {
    id:     1,
    items: [1, 2]
  }
]