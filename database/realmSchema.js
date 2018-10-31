// contant table database
const Realm = require("realm");
const USER_SCHEMA = "User"; // table name

const UserSchema = {
    name: USER_SCHEMA,
    primaryKey: "id",
    properties: {
        id: "int", // primary key
        name: {type: "string", indexed: true},
        email: "string",
    }
};

const databasesOption = {
    path: "RealmInNodeIs.realm",
    schema: [UserSchema],
    schemaVersion: 0,
}

//function for schema
const insertNewUser = newUser => new Promise((resolve, reject) => {

});

module.exports = {
    insertNewUser,
}