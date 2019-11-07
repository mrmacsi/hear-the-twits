const mongoose = require("mongoose");
const { Schema } = mongoose;
//4. Store/ log all authentications and API requests in RDMS database (preferably mysql / mongo) +1
const tokenSchema = new Schema({
  oAuthProvider: String,
  oauthAccessToken: String,
  oauthAccessTokenSecret: String,
  user: { type: Schema.Types.ObjectId, ref: "User" }, //how to use foreign key in mongo db that means the id of the entity
  dateCreated: Date
});

mongoose.model("Token", tokenSchema);
