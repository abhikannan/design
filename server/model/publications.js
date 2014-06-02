Meteor.publish("currentUser", function() {
    if (!this.userId) {
        return [];
    }
    return Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            "emails": 1,
            "profile": 1,
            "status": 1,
            "createdAt": 1
        }
    });
});

Meteor.publish("applications", function() {
    if (!this.userId) {
        return [];
    }
    return Applications.find({});
});

Meteor.publish("application", function(_id) {
    if (!this.userId) {
        return [];
    }
    return Applications.find({_id: _id});
});
