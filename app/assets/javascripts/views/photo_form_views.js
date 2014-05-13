(function(root) {

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} )

  var PhotoFormView = PhotoApp.PhotoFormView = function () {
    this.$el = $("<div></div>");
    this.template = JST["photo_form"];
    // PhotoApp.Photo.on()

  }

  _.extend(PhotoFormView.prototype, {
    render: function() {
      this.$el.html(this.template);
      return this.$el;
    }

    submit: function(event) {
      event.preventDefault();

      var $(form) = $(event.target);
      var formData = $(form).serializeJSON;
      var newPhoto = new PhotoApp.Photo(formData);

    }
  })

  _.extend(PhotoFormView, {
    events: {},

    on: function (eventTitle, callback) {
      this.events[eventTitle] = this.events[eventTitle] || [];
      this.events[eventTitle].push(callback);
    },



  })



})(this);