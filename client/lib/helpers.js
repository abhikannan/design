UI.registerHelper("Router", function() {
    return Router;
});

UI.registerHelper("Session", function(key) {
    return Session.get(key);
});

UI.registerHelper("isDebug", function() {
    return Meteor.settings.public.isDebug;
});

