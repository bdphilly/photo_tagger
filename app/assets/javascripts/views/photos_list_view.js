(function(root){

  var PhotoApp = root.PhotoApp = ( root.PhotoApp || {} );

  var PhotosListView = PhotoApp.PhotosListView = function(){
    this.$el = $('<div></div>')
  }

  _.extend(PhotosListView.prototype, {
    render: function() {
      this.$el.empty();
      this.$el.append('<ul>');
      var that = this;
      _.each(PhotoApp.Photo.all, function(photo) {

        that.$el.append('<li>' + photo.get('url') +
          ' : ' + photo.get('title') + '</li>');
      })
      return this.$el;
    }
  })
})(this);