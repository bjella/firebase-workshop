# Firebase Workshop


## Setup

```node
npm install -g firebase-tools
firebase login
```


## Database
Create a new project on [_https://console.firebase.google.com_](https://console.firebase.google.com)

Go to Database, add some stuff.


### Fetch data with REST
Use anything : curl, postman etc.

`curl 'https://jobb-test.firebaseio.com/.json?print=pretty'`



### Optional: Turn off auth and do some REST calls (Turn back on after)
1. Database -> Rules -> read and write = true
2. Test some HTTP GET/PUT/POST/PATCH
3. See the live update in the console

```bash
curl -X PUT -d '{
  "Ole": {
    "name": "Ole dole",
    "age": 30
  }
}' 'https://jobb-test.firebaseio.com/fraEnPut.json'
```




# Functions

### Lag prosjekt
```node
mkdir fb-workshop
cd fb-workshop
firebase init (recomend to just choose functions for now. can add later with running command again)
```


### Write a function
1. Open `functions/index.js`.
1. Uncomment the JS code .
1. Write a message.
1. Deploy with `firebase deploy`
1. Go to the Function URL when finished.


Write a new function by adding a new export:

```javascript
exports.hils = functions.https.onRequest((request, response) => {
  const {name, age} = request.query;
  console.log(`${name} var innom`);
  response.send(`Hey ${name} (${age}) from Firebase!`);
});
```
Deploy og test den nye funksjonen med http-get (url) parameter.

Look for the `console.log()` at functions in firebase console.

### Google Cloud Function
Go to https://console.cloud.google.com/ to see the same functions created with fb.
Check that you are in the same firebase project.
If not:
1. Press "Choose project " in top menu.
1. Search/find the project by name.
1. its now "added" as a google cloud project.

In Google Cloud Function you can:
* Create new functions in browser
* Edit the code, copy etc.
* See more details on the function than in FB.



### Idea for tasks
https://firebase.google.com/docs/functions/get-started

* HTTP trigger a function, post data to database
* Create a function that listen for database changes, and act on that.
* Include any npm module and do something..
* Connect to google services : https://cloud.google.com/functions/docs or use any Google API

 


#### Authentication for REST


## Hosting
