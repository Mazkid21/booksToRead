var expect = require('chai').expect;
var request = require('request');
var URL = "https://gentle-coast-85328.herokuapp.com";



describe("Shakes", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
			request(URL, function(error, response, body) {
				apiError = error;
				apiResponse = response;
				apiBody = body;
				done();
			});
	});
	it("should return 200 - OK", function() {
			expect(apiResponse.statusCode).to.equal(200);
	});

it("should have a sentance in the body", function(){
		if(typeof(apiBody)=== "string") {
		apiBody = JSON.parse(apiBody);
		}
	console.log(apiBody);
		expect(apiBody.sentence).to.not.be.empty;
	});
});

