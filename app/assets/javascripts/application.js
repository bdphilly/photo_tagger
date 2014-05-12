// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializeJSON
//= require underscore
//
//= require_tree ./models
//= require_tree ../templates
//
//= require_tree .

var Photo = function (attrs) {
  this.attributes = (attrs || {})
};

_.extend(Photo.prototype, {
  get: function(attr_name) {
    return this.attributes[attr_name];
  },

  set: function(attr_name, val) {
    this.attributes[attr_name] = val;
  },

  create: function(callback) {
    var that = this;
    $.ajax({
      method: 'POST',
      url: 'api/photos',
      data: {
        photo: this.attributes
      },
      success: function (response) {
        _.extend(that.attributes, response);
        if (callback) callback(that.attributes);
      }
    })
  },

  update: function(callback) {
    var that = this;
    $.ajax({
      method: 'PATCH',
      url: 'api/photos/' + this.get('id'),
      data: {
        photo: this.attributes
      },
      success: function (response) {
        _.extend(that.attributes, response);
        if (callback) callback(that.attributes);
      }
    })
  },

  save: function(callback) {
    if(this.get('id')){
      this.update(callback);
    } else {
      this.create(callback);
    }
  },

  fetchByUserId: function(userId, callback) {
    var that = this;
    $.ajax({
      method: 'GET',
      url: 'api/users/' + userId + '/photos',
      success: function (response) {
        _.extend(that.attributes, response);
        if (callback) callback(that.attributes);
      }
    })
  }

});
// //
// // _.extend(Photo)
//
// var p = new Photo()
//
// p.set('url', 'http://google.com')
// p.set('title', "test");
// p.save();//
// p.set('title',)
// p.save(function(newPhoto) {
//   console.log(newPhoto);
// });