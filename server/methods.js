Meteor.methods({
    addUser: function(name, email, imageId) {
        check(name, String);
        check(email, String);
        check(imageId, String);

    }
});
