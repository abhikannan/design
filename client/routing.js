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
        layoutTemplate: "adminLayout"
    });
});

Router.onBeforeAction(function(pause) {
    if (!Meteor.userId()) {
        this.render("login");
        pause();
    }
}, {only: ['admin']});

