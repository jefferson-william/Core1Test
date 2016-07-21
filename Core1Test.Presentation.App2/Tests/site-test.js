// Mocha (https://mochajs.org/) JavaScript tests for the calculator in site.js.
describe("Tests", function () {

    describe("Test", function () {
        it("Testing.", function () {});
    });

});

// An example of how to test asynchronous code.
describe("setTimeout", function () {
    // A 'done' function delegate must be called to tell Mocha when the test has finished.
    it("should complete after one second.", function (done) {
        setTimeout(function () {
            done();
        },
        1000);
    })
});
