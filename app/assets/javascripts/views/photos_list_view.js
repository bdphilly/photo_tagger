(function(root){

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} );

  var PhotosListView = PhotoApp.PhotosListView = function(){
    this.$el = $('<div></div>');

    this.$el.on("click", "a", this.showDetail.bind(this));

    PhotoApp.Photo.on("add", this.render.bind(this));
  };

  _.extend(PhotosListView.prototype, {
    render: function() {
      this.$el.empty();
      var $ul = $("<ul></ul>");
      _.each(PhotoApp.Photo.all, function(photo) {
        var $li = $("<li></li>");
        var $a = $("<a></a>");
        $a.text(photo.get("title"));
        $a.attr("href", "#");
        $a.attr("data-id", photo.get("id"));
        $ul.append($li.html($a));
      });
      this.$el.html($ul);
      return this;
    },

    showDetail: function (event) {
      event.preventDefault();

      var $currentTarget = $(event.currentTarget);
      var photo = PhotoApp.Photo.find(parseInt($currentTarget.attr("data-id")));
      PhotoApp.showPhotoDetail(photo);
    },
  });
})(this);