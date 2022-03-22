const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('./testControllerHolder');

const {AfterAll, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');

const timeout = 100000;

let cafeRunner = null;
let n=0;



/*
15
Objective: We need to inject the TestCafe test controller object into the context of each step definition.
16
17
1. We are creating a dummy test file by function "createTestFile".
18
2. The cucumbertest.js file reads as a TestCafe test file with fixtures.
19
3. It doesnot execute the test, rather it captures the TestCafe controller and passes it back to testControllerHolder.js
20
4. It is performed by calling testControllerHolder.capture function. This passes in the test controller, which responds with a Promise, 
21
to be resolved when the Cucumber script finishes and calls testControllerHolder.free function
22
5. Until then, the TestCafe script waits in the background, allowing us to use the test controller to execute all the cucumber scenarios.
23
*/

function createTestFile() {

    fs.writeFileSync('cucumbertest.js',

        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("cucumberfixture")\n' +

        'test\n' +

        '("test", testControllerHolder.capture)')

}


// Create a runner function with configurations like src, screenshots, browsers.
//./cucumbertest.js
function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function(tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./cucumbertest.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run()
                .catch(function(error) {
                    console.error(error);
                });
        })
        .then(function(report) {
        });
}


// Setting the default time out value

setDefaultTimeout(timeout);


/*
50
1. Before hook runs before each Cucumber test.
51
2. It calls the "runTest" function, which contains the runner configuration.
52
3. Then, it calls the "createTestFile" function. It generates a dummy file, cucumbertest.js, behaving as the source of the tests.
53
4. Then, it calls the waitForTestController of cucumberWorld.js to add testController to Cucumber’s world scope.
54
5. Then, it also maximizes the test controller window.
55
*/

Before(function() {

    runTest(n,'chrome');

    createTestFile();
   
    return this.waitForTestController.then(function(testController) {

        return testController.maximizeWindow();

    });

});


// After hook runs after each Cucumber test. It is used to unlink the test and make testController "null".

// It calls the testControllerHolder.free function. 

After(function() {

    fs.unlinkSync('cucumbertest.js');

    testControllerHolder.free();

});


// AfterAll hook runs after all the tests execution. It check the last runs status to be "test-done-confirmation",

// and then, close the cafeRunner and exit the process.

// It checks with a wait timeout of 500.

AfterAll(function() {
    let intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }

    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
});