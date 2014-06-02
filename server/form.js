Applications = new Meteor.Collection("applications");

Meteor.startup(function() {
    // code to run on server at startup
});

Meteor.methods({
    addUser: function(name, email, imageId) {
        console.log("Adding User");
        var response = Applications.insert({
            'name': name,
            'email': email,
            'imageId': imageId,
            'submittedOn': new Date()
        });
        return response;
    }
})
