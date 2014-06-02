Router.map(function () {
    this.route('index', {
        path: "/"
    });

    this.route('admin', {
        path: "/admin"
    });

    this.route('user', {
        path: "/admin/user/:_id"
    });
});

Router.onBeforeAction(function(pause) {
    if (!Meteor.userId()) {
        this.render("login");
        pause();
    }
}, {only: ['admin']});

