var Backbone = require('backbone');
var $ = require('jquery');

MasonsCoolCustomModelConstructor = Backbone.Model.extend({

  initialize: function() {
    console.log('wow, a function was born!');
  },

});

AnExampleCollection = Backbone.Collection.extend({
    model: MasonsCoolCustomModelConstructor,

    url: 'http://tiny-pizza-server.herokuapp.com/collections/examples'
});
  
var coolInstance = new MasonsCoolCustomModelConstructor({
  name: "Mason",
  cool: false
});

var collectionInstance = new AnExampleCollection();

collectionInstance.add(coolInstance);

console.log(coolInstance.get('name'));

coolInstance.set('name', 'mark');

collectionInstance.set(coolInstance);

console.log(coolInstance.get('name'));

collectionInstance.remove(coolInstance);

console.log(collectionInstance.get(coolInstance));


var MarkView = Backbone.View.extend({

  template: function(model){
    return "Hi, I'm a man named " + model.get('name');
  },

  initialize: function(){
    $('body').append(this.el);
    this.render();
  },

  render: function(){
    this.$el.html( this.template(this.model) )
  }

});

new MarkView({model: coolInstance});

