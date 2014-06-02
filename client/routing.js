Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: "notFound"
});

Router.map(function() {
    this.route('index', {
        path: "/"
    });

    this.route('admin', {
        path: "/admin",
        layoutTemplate: "adminLayout",
        waitOn: function() {
            return [Meteor.subscribe('applications')]
        }
    });

    this.route('application', {
        path: "/admin/application/:_id",
        layoutTemplate: "adminLayout",
        waitOn: function() {
            return [Meteor.subscribe('application', this.params._id)]
        },
        data: function() {
            var application = Applications.findOne(this.params._id);
            if (!application) {
                return null;
            }
            return _.extend({
                application: application
            }, this.params)
        }
    });
});

Router.onBeforeAction(function(pause) {
    if (!Meteor.userId()) {
        this.render("login");
        pause();
    }
}, {only: ['admin']});

