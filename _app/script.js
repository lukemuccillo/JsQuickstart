
exports.addNumbers = function(a, b) {
	if (a == undefined || b == undefined) {
		throw Error("both values must be defined");
	}

	return a + b;
};
