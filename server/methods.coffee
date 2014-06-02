Meteor.methods
  addUser: (name, email, imageId) ->
    check(name, String)
    check(email, String)
    check(imageId, String)
    console.log "Adding User"
    response = share.Applications.insert(
      name: name
      email: email
      imageId: imageId
      submittedOn: new Date()
    )
    response
