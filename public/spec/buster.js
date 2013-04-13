var config = module.exports;

// config["App tests"] = {
//     rootPath: "../",
//     environment: "node", // or "node"
//     // sources: [
//     //     "js/**/*.js",
//     //     "js/vendor/**/*.js",
//     // ],
//     tests: [
//         "spec/*-test.js"
//     ]
// }

config["Browser tests"] = {
	rootPath: "../",
	libs: [
		"js/vendor/requirejs/require.js",	
	],
	sources: ["js/**/*.js"],
    tests: ["spec/**/*.js"],
    extensions: [require("buster-amd")],
};