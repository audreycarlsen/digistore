App.Order = DS.Model.extend({
  cart:      DS.belongsTo("cart", {async: true}),
  name:      DS.attr("string"),
  email:     DS.attr("string"),
  zipcode:   DS.attr("string"),
  cc_number: DS.attr("string"),
  exp_date:  DS.attr("string"),
  cvv:       DS.attr("string")
});