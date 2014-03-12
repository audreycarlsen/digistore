App.Product = DS.Model.extend({
  name:        DS.attr("string"),
  price:       DS.attr("number"),
  description: DS.attr("string"),
  image:       DS.attr("string"),
  item:        DS.belongsTo("item", {async: true})
});

App.Product.FIXTURES = [
  {
    id:          1,
    name:        "Aged White Cheddar Puffs",
    price:       5000,
    image:       "http://aws.bettymills.com/store/images/product/BFG34856.JPG",
    description: "Terry Richardson mlkshk Williamsburg synth freegan. Carles kale chips bicycle rights banjo single-origin coffee post-ironic. Readymade vinyl food truck aesthetic, keytar lo-fi Williamsburg single-origin coffee roof party brunch High Life Cosby sweater church-key. Roof party VHS pop-up asymmetrical, polaroid synth tattooed flexitarian. Put a bird on it small batch messenger bag, sriracha tofu dreamcatcher DIY. Ethnic paleo Helvetica, chia scenester bicycle rights disrupt DIY chambray food truck. Art party food truck irony, tousled four loko Shoreditch vegan pour-over gentrify asymmetrical squid salvia.",
    item:        1
  }, {
    id:          2,
    name:        "Nutella",
    price:       275,
    image:       "http://www.nutella.com/image/journal/article?img_id=1064300&t=1378368718314",
    description: "Whatever wolf Schlitz, Tumblr ethical Godard seitan tousled mixtape Portland bicycle rights. Marfa aesthetic brunch cardigan single-origin coffee. Carles ennui 90's mlkshk, ethnic normcore Portland irony yr letterpress bespoke. Chillwave fixie McSweeney's tousled, vegan tote bag tofu roof party. Street art cardigan hoodie aesthetic pug single-origin coffee. Put a bird on it tote bag Portland Godard Cosby sweater slow-carb chillwave pug. Four loko Tonx synth, put a bird on it master cleanse semiotics YOLO VHS narwhal sartorial.",
    item:        2
  }
]