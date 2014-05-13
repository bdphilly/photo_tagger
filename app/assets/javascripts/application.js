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
//= require_tree ./models
//= require_tree ../templates
//= require_tree .
//= require_tree ./views



// function PhotoApp ($rootEl) {
//   this.$rootEl = $rootEl;
// };

_.extend(PhotoApp, {

  initialize: function () {
    var that = this;
    PhotoApp.Photo.fetchByUserId(CURRENT_USER_ID, function() {
      PhotoApp.showPhotosIndex();
    });
  },

  showPhotosIndex: function() {
    var content = $("#content");
    content.empty();

    var photosListView = new PhotoApp.PhotosListView();
    content.append(photosListView.render().$el);

    var photoFormView = new PhotoApp.PhotoFormView();
    content.append(photoFormView.render().$el);
  },

    //   var photosListView = new PhotoApp.PhotosListView();
    //   var newView = photosListView.render();
    //   that.$rootEl.append(newView)
    //
    //   var photoFormView = new PhotoApp.PhotoFormView();
    //   var newForm = photoForm.render();
    //   that.$rootEl.append(newForm);
    // })

});

