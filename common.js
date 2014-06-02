var imageStore = new FS.Store.GridFS("images", {
  mongoUrl: 'mongodb://127.0.0.1:3001/test/', // optional, defaults to Meteor's local MongoDB
  mongoOptions: {},  // optional, see note below
  maxTries: 1 // optional, default 5
 // chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.allow({
    insert: function () {
    return true;
  }
});
