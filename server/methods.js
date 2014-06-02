Meteor.methods({
    addUser: function(name, email, imageId) {
        var response;
        check(name, String);
        check(email, String);
        check(imageId, String);
        console.log("Adding User");
        response = share.Applications.insert({
            name: name,
            email: email,
            imageId: imageId,
            submittedOn: new Date()
        });
        return response;
    }
});
