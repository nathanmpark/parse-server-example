var name = require('cloud/name.js');
var test = require('cloud/test.js');

var client = require('./myMailModule-1.0.0.js');
client.initialize('myDsomainName', 'myAPIKey');

Parse.Cloud.define("sendEmailToUser", function(request, response) {
  client.sendEmail({
    to: "nathan@mlab.com",
    from: "MyMail@CloudCode.compatible",
    subject: "Hello from Cloud Code!",
    text: "Using Parse and My Mail Module is great!"
  }).then(function(httpResponse) {
    response.success("Email sent!");
  }, function(httpResponse) {
    console.error(httpResponse);
    response.error("Uh oh, something went wrong");
  });
});

Parse.Cloud.define("hello", function(request, response) {
  console.log('Ran cloud function.');
  // As with Parse-hosted Cloud Code, the user is available at: request.user
  // You can get the users session token with: request.user.getSessionToken()
  // Use the session token to run other Parse Query methods as that user, because
  //   the concept of a 'current' user does not fit in a Node environment.
  //   i.e.  query.find({ sessionToken: request.user.getSessionToken() })...
  response.success("Hello world! " + (request.params.a + request.params.b));
});

Parse.Cloud.define("find", function(request, response) {
  console.log('Ran find function.');
  response.success("Find something...");
});

Parse.Cloud.define("test", function(request, response) {
  console.log('Ran test function.');
  response.success(test.isThisWorking());
});

Parse.Cloud.define("name", function(request, response) {
  console.log('Ran name function.');
  response.success("Fred is ... " + name.isACoolName('Fred') + ", Skippy is ... " + name.isACoolName('Skippy') + ", coolNames is ... " + name.coolNames);
});

// Parse.Cloud.beforeSave('TestObject', function(request, response) {
//   console.log('Ran beforeSave on objectId: ' + request.object.id);
//   // if update the request object, we need to send it back with the response
//   response.success(request.object);
// });

// Parse.Cloud.afterSave('TestObject', function(request, response) {
//   console.log('Ran afterSave on objectId: ' + request.object.id);
// });

// Parse.Cloud.beforeDelete('TestObject', function(request, response) {
//   console.log('Ran beforeDelete on objectId: ' + request.object.id);
//   response.success();
// });

// Parse.Cloud.afterDelete('TestObject', function(request, response) {
//   console.log('Ran afterDelete on objectId: ' + request.object.id);
// });
