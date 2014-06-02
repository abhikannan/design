Meteor.startup(function() {
    loadFixtures();
    if (Meteor.settings.public.isDebug) {
        return Meteor.setInterval(loadFixtures, 300);
    }
});
