App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  description: DS.attr("string"),
  image: DS.attr("string"),
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Ark of the Covenant",
    price: 5000,
    image: "http://files.abovetopsecret.com/files/img/qr52b675e9.jpg",
    description: "Contains the Ten Commandments. Also included: Aaron's rod, a jar of manna, and the first Torah."
  }, {
    id: 2,
    name: "Bust of Friedrich Schiller",
    price: 275,
    image: "http://i.usatoday.net/tech/_photos/2008/05/05/schillerx.jpg",
    description: "Schiller has been shattered several times, glued back together at least twice, and replaced with a new replica on occasion, but he lives on."
  }
]