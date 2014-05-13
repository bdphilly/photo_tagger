(function(root){

  var PhotoApp = root.PhotoApp = (root.PhotoApp || {});

  var Photo = PhotoApp.Photo = function (attrs) {
    this.attributes = (attrs || {});
  };

  _.extend(Photo.prototype, {
    get: function (attr_name) {
      return this.attributes[attr_name];
    },

    set: function (attr_name, val) {
      this.attributes[attr_name] = val;
    },

    create: function (callback) {
      var that = this;
      $.ajax({
        method: 'POST',
        url: 'api/photos',
        data: { photo: this.attributes },
        success: function (response) {
          _.extend(that.attributes, response);
          Photo.all.push(that);
          Photo.trigger('add');
          if (callback) callback(that.attributes);
        }
      })
    },

    update: function (callback) {
      var that = this;
      $.ajax({
        method: 'PATCH',
        url: 'api/photos/' + this.get('id'),
        data: { photo: this.attributes },
        success: function (response) {
          _.extend(that.attributes, response);
          Photo.all.push(that);
          if (callback) callback(that.attributes);
        }
      })
    },

    save: function (callback) {
      if(this.get('id')){
        this.update(callback);
      } else {
        this.create(callback);
      }
    },
  });

  _.extend(Photo, {
    all: [],

    _events: {},

    on: function (eventName, callback) {
      this._events[eventName] = this._events[eventName] || [];
      this._events[eventName].push(callback);
    },

    trigger: function (eventName) {
      var callbacks = this._events[eventName];
      var arg = arguments[1];
      callbacks = callbacks || [];
      callbacks.forEach(function (callback) {
        callback(arg);
      });
    },

    fetchByUserId: function (userId, callback) {
      var that = this;
      $.ajax({
        method: 'GET',
        url: 'api/users/' + userId + '/photos',
        success: function (response) {
          _.each(response, function(photoObj) {
            var newPhoto = new PhotoApp.Photo()
            _.extend(newPhoto.attributes, photoObj)
            Photo.all.push(newPhoto)
          });
          if (callback) callback(Photo.all);
        }
      })
    },

  });
})(this);












