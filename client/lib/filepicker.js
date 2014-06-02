FP = {
    showUpload: function(callback) {
        if (filepicker) {
            filepicker.setKey("AsD6uwhWBROacXlusmNVtz");
            return filepicker.pickAndStore({
                maxSize: 25 * 1024 * 1024,
                services: ['COMPUTER', 'WEBCAM', 'URL', 'DROPBOX', 'GOOGLE_DRIVE', 'GMAIL', 'FACEBOOK', 'INSTAGRAM', 'FLICKR', 'PICASA', 'EVERNOTE', 'BOX', 'SKYDRIVE', 'FTP', 'WEBDAV', 'GITHUB'],
                openTo: 'COMPUTER'
            }, {
                path: '/pintask/'
            }, callback, function(FPError) {
                if (FPError.code === 101) {
                    return;
                }
                return console.log(FPError.toString());
            });
        } else {
            return setTimeout(function() {
                return FP.showUpload(callback);
            }, 500);
        }
    },
    showUploadImage: function(callback) {
        if (filepicker) {
            filepicker.setKey("AsD6uwhWBROacXlusmNVtz");
            return filepicker.pickAndStore({
                maxSize: 25 * 1024 * 1024,
                services: ['COMPUTER', 'WEBCAM', 'URL', 'DROPBOX', 'GOOGLE_DRIVE', 'GMAIL', 'FACEBOOK', 'INSTAGRAM', 'FLICKR', 'PICASA', 'EVERNOTE', 'BOX', 'SKYDRIVE', 'FTP', 'WEBDAV', 'GITHUB'],
                openTo: 'COMPUTER',
                multiple: false
            }, {
                path: '/pintask/'
            }, callback, function(FPError) {
                if (FPError.code === 101) {
                    return;
                }
                return console.log(FPError.toString());
            });
        } else {
            return setTimeout(function() {
                return FP.showUploadImage(callback);
            }, 500);
        }
    }
};
