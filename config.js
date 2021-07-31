module.exports = {
  "token": (process.env.TOKEN), // https://discordapp.com/developers/applications/ID/bot
  "mongodbUrl": (process.env.MONGO), // Mongodb connection url.
  "id": (process.env.ID), // https://discordapp.com/developers/applications/ID/information
  "clientSecret": (process.env.CSECRET), // https://discordapp.com/developers/applications/ID/information
  "owner": ["707278485122449439", "798490930180522005"],
  "domain": "https://blinkbot.ml",
  "port": 8080,
  "usingCustomDomain": true
};

/**
 * !!!
 * You need to add a redirect url to https://discordapp.com/developers/applications/ID/oauth2.
 * Format is: domain:port/callback example http://localhost:8080/callback
 * - Do not include port if the port is 80.
 * !!!
 */
