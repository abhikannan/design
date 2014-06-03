Template.applicationRow.helpers({
//  helper: function() {
//
//  }
});

Template.applicationRow.rendered = function() {

};

Template.applicationRow.events({
  "click .remove": function(event, template) {
      Applications.remove(template.data._id)
  }
});
