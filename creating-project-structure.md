# Creating a project structure

This document is a quick run through of how I created this project structure. You will need to go through the setting up your
environment steps here:

[Setting up your environment](https://github.com/justsayno/fhf-demo/blob/master/setting-up-your-environment.md)

The steps are below:

1. Create an empty solution in visual studio. E.g RaygunDemo

2. Navigate to the directory this created in step one and enter the command `yo angular`. This will give you some options 
about your application, choose what you like.

3. If you want to rename your JavaScript application folder (defaults to 'app') you must change the some references in the Yeoman
generated files:

- in the bower.json locate change the `appPath` setting. E.g. `"appPath": "RaygunDemo.App"`
- in GruntFile.js locate the line where `var appConfig` declaration is made and change the value after the || for the app property to
reflect your app path


- In `app/index.html` locate the line `<!-- build:js({.tmp,app}) scripts/scripts.js -->` and change `app` to reflect your app folder
name. E.g. `<!-- build:js({.tmp,RaygunDemo.App}) scripts/scripts.js -->`
- In `test/karma.conf.js` update any reference to the folder `app` i.e. line 37

3. Open your visual studio solution and create a solution file. Add all the files in the root directory to the solution item. You can also add
the test folder too for your Javascript tests.

4. Right click on the solution in solution explorer and click add -> Existing website and add the app folder you have created e.g. RaygunDemo.App.

5. Right click on the solution and click Add -> new project and create and empty ASP.NET project with WebApi references.

> Note that you will need to enable CORS for WebApi. See [Enabling CORS in WebApi](http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api)
