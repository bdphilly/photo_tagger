(function(root) {

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} )

  var PhotoFormView = PhotoApp.PhotoFormView = function () {
    this.$el = $("<div></div>");
    this.template = JST["photo_form"]();
    this.$el.on("submit", "form", this.submit.bind(this));
  };

  _.extend(PhotoFormView.prototype, {
    render: function() {
      this.$el.html(this.template);
      // debugger
      return this;
    },

    submit: function (event) {
      event.preventDefault();

      var $form = $(event.currentTarget);
      var formData = $form.serializeJSON();
      var newPhoto = new PhotoApp.Photo(formData.photo);

      newPhoto.create(function (newPhoto) {
        alert('photo got saved!');
      });

    }
  });

})(this);