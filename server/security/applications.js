Applications.allow({
    insert: function(userId, application) {
        return true; // TODO: implement normal checks
    },
    update: function(userId, application, fieldNames, modifier, options) {
        if (userId) {
            return true;
        }
        return false;
    }
});
