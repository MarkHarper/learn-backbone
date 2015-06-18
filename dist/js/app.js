(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"backbone":"backbone","jquery":"jquery"}]},{},[1])


//# sourceMappingURL=app.js.map