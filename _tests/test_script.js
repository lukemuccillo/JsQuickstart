var chai = require('chai');
chai.should() // add should to Object.prototype

describe('#addNumbers()', function() {

	it ('should return the sum of two numbers', 
			function() {
				var sut = require('../_app/script');
				var sum = sut.addNumbers(1, 3);
				sum.should.equal(4);
			}
	);

	it ('should throw if one of the numbers is undefined', 
			function() {
		
		var sut = require('../_app/script');
		var fn = (function() {sut.addNumbers(undefined, 1)});
		fn.should.throw(Error);

		var fn = (function() {sut.addNumbers(1, undefined)});
		fn.should.throw(Error);

	});
});

