Meteor.startup(function() {
    loadFixtures();
    if (true) {
        return Meteor.setInterval(loadFixtures, 300);
    }
});
