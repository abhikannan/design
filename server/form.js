Users = new Meteor.Collection("users");

Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
    addUser : function(name,email,fileObj){
        console.log("Adding User");
        var response = Users.insert({
                'name' : name,
                'email' : email,
                'images':fileObj,
                'submittedOn' : new Date()          
        });
        return response;
    }
})