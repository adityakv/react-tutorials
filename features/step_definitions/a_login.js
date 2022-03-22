const {Given, When, Then} = require('@cucumber/cucumber');

const { Selector } = require('testcafe');

Given('user navigates to the Login form page',async function () {
// Write code here that turns the phrase above into concrete actions
await testController.navigateTo('http://localhost:3000/signin');
});



When('user enters {string} in the name field',async function (string) {
// Write code here that turns the phrase above into concrete actions
let user=await Selector('input').withAttribute("id","username").with({ boundTestRun: testController });
await testController.typeText(user,string);
});


When('user enters {string} in the password field',async function (string) {
// Write code here that turns the phrase above into concrete actions
let user=await Selector('input').withAttribute("type","password").with({ boundTestRun: testController });
await testController.typeText(user,string);
});



When('user clicks on {string} button',async function (string) {
// Write code here that turns the phrase above into concrete actions
let user=await Selector('button').withExactText(string).with({ boundTestRun: testController });
await testController.click(user);
});



When('{string} header appears',async function (string) {
// Write code here that turns the phrase above into concrete actions
let user=await Selector('h4').withExactText(string).with({ boundTestRun: testController });
await testController.expect(user.exists).ok();
});

When('user clicks on AddIcon button',async function () {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('svg').withAttribute("data-testid","AddIcon").with({ boundTestRun: testController });
          await testController.click(user);
        });
      

        When('user gets a Create task popup',async function () {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('form').find('h2').withExactText("Create your task").with({ boundTestRun: testController });
         await testController.expect(user.exists).ok();
        });
      

        When('user enters {string} in the title field',async function (string) {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('input').withAttribute("id","title").with({ boundTestRun: testController });
await testController.typeText(user,string);
        });
      

        When('user enters {string} in the task field',async function (string) {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('textarea').withAttribute("id","body").with({ boundTestRun: testController });
await testController.typeText(user,string);
        });
      

        When('user clicks on Create button',async function () {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('button').withExactText("CREATE").with({ boundTestRun: testController });
          await testController.click(user);
        });
      

        Then('{string} is added to task list',async function (string) {
          // Write code here that turns the phrase above into concrete actions
          let user=await Selector('h6').withExactText(string).with({ boundTestRun: testController });
         await testController.expect(user.exists).ok();
        });