(function(root){

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} );

  var PhotosListView = PhotoApp.PhotosListView = function(){
    this.$el = $('<div></div>');
  }

  _.extend(PhotosListView.prototype, {
    render: function() {
      this.$el.empty();
      var $ul = $("<ul></ul>");
      // var that = this;
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
    }
  })
})(this);