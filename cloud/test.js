Parse.Cloud.define("test", function(request, response) {
  console.log('Ran test function.');
  response.success("Test 123");
});
