# Don't use transforms, they break validation ("Expected plain object", but transforms give an extended object)

share.Applications = new Meteor.Collection("applications")
