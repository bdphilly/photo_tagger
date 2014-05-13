(function(root) {

  PhotoApp = root.PhotoApp = (root.PhotoApp || {})

  var PhotoDetailView = PhotoApp.PhotoDetailView = function (photo) {
    this.$el = $("<div></div>");
    this.photo = photo;
    this.template = JST["photo_detail"]({photo: this.photo});

    this.$el.on("click", "a#photosListView", this.showList.bind(this));
  };

  _.extend(PhotoDetailView.prototype, {
    render: function() {
      this.$el.html(this.template);
      return this;
    },

    showList: function (event) {
      event.preventDefault();
      PhotoApp.showPhotosIndex();
    },
  });

})(this);