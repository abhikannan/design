Template.login.helpers({

});

Template.login.rendered = function() {

};

Template.login.events({
  "submit form": function(event, template) {
      event.preventDefault();
      var email = template.$(".email").val();
      var password = template.$(".password").val();
      Meteor.loginWithPassword(email, password, function(error) {
          if (error) {
              template.$(".error-container").html(error.reason).show();
          }
      });
  }
});
