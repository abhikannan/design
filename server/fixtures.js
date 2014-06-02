var insertData;

insertData = function(data, collection) {
    var object, _id;
    if (collection.find().count() === 0) {
        for (_id in data) {
            object = data[_id];
            object._id = _id;
            object.isNew = false;
            collection.insert(object);
        }
        return true;
    }
    return false;
};

loadFixtures = function() {
    var allUsersIds, applications, lastWeek, name, now, user, userinfo, profiles, users, _i, _id, _j, _len, _len1;
    now = new Date();
    lastWeek = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    users = {};
    profiles = [
        {
            name: "Abhilash"
        }, {
            name: "Denis"
        }
    ];
    for (_i = 0, _len = profiles.length; _i < _len; _i++) {
        userinfo = profiles[_i];
        name = userinfo.name;
        _id = name.replace(/[^\w]/g, "");
        users[_id] = {
            _id: _id,
            profile: {
                name: name,
                locale: "no",
                image: "/fixtures/" + _id + ".jpg"
            },
            emails: [
                {
                    address: _id.toLowerCase() + "@gmail.com",
                    verified: true
                }
            ],
            services: {
                password: {
                    srp: {
                        identity: "yE3SDLstoyKgho6aw",
                        salt: "2KaD5ByuLFiB9D67m",
                        verifier: "a9cd2d77478f4538a31651af4e9030a2e39da29ad335725054dcef3efd256caab0387964920bb924eddd17f8b20498a109e652ace08e514ed16cc0e38e352cde5edae0f56fae6feb3f37e4afee5ca96fb473fad9ab70d5a5307e662a377e79c9e4aa99e4fd5983d7ca2df98c07fd631f3a693da42ad92249b3b9fae36f7e8e40"
                    }
                }
            },
            createdAt: lastWeek
        };
    }
    allUsersIds = [];
    for (_j = 0, _len1 = users.length; _j < _len1; _j++) {
        user = users[_j];
        allUsersIds.push(user._id);
    }
    insertData(users, Meteor.users);

    applications = {
        JodieFoster: {
            name: "Jodie Foster",
            email: "jodie@imdb.com",
            height: "1.61",
            size: "S",
            comments: "I need a decent outfit for an Oscar Ceremony red carpet"
        }
    };
    insertData(applications, Applications);
};
