Meteor.startup ->
  share.loadFixtures()
  if true # use Meteor.settings.public.isDebug in future
    Meteor.setInterval(share.loadFixtures, 300)
