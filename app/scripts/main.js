var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    host: "http://localhost:3000"
  })
});

Ember.RadioButton = Ember.View.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "checked:checked:" ],
    click : function() {
        this.set("selection", this.$().val())
    },
    checked : function() {
        return this.get("value") == this.get("selection");   
    }.property()
});