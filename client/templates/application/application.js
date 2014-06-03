Template.application.helpers({
//  helper: function() {
//
//  }
});

Template.application.rendered = function() {

};

Template.application.events({
  "input .urls": function(event, template) {
      var $urls = $(event.currentTarget);
      var urls = $urls.val();
      Applications.update(template.data._id, {$set: {urls: urls}});
  }
});
