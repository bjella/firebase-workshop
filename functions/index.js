const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.hils = functions.https.onRequest((request, response) => {
  const {name, age} = request.query;
  console.log(`${name} var innom`);
  response.send(`Hey ${name} (${age}) from Firebase!`);
});
