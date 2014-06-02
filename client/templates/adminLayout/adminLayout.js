Template.adminLayout.helpers({
//  helper: function() {
//
//  }
});

Template.adminLayout.rendered = function() {

};

Template.adminLayout.events({
  "click .logout": function(event, template) {
      event.preventDefault();
      Meteor.logout();
  }
});
