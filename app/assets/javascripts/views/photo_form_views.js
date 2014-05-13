(function(root) {

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} )

  var PhotoFormView = PhotoApp.PhotoFormView = function () {
    this.$el = $("<div></div>");
    this.template = JST["photo_form"];
  }

  _.extend(PhotoFormView.prototype, {
    render: function() {
      this.$el.html(this.template);
      return this.$el;
    }
  })

})(this);

