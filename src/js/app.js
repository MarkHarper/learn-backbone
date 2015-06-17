MasonsCoolCustomModelConstructor = Backbone.Model.extend({

  initialize: function() {
    console.log('wow, a function was born!');
  }

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

collectionInstance.fetch().done(function(){
  console.log('the first thing in collectionInstance after fetching is', collectionInstance.first());
});