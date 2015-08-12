# raygun-demo

This application requires you have Git, NodeJs, Bower and Npm installed on your local machine. These steps are worth doing anyway
and I have tried my best to make it worth in Windows correctly. Follow these instructions:

https://github.com/justsayno/fhf-demo/blob/master/setting-up-your-environment.md

This is a Raygun demo project. The application is a very simple AngularJS client with an ASP.NET
WEBAPI back end. All the application really does is has buttons to create errors in different
ways. This assumes you have got a free trial of Raygun and have set up one application for
JavaScript and one for ASP.NET WebAPI at http://raygun.io. You will need to set up two applications,
on for the App and one for the WebApi projects and get the Api key from the application settings page
on each.

Below describes the steps to get the site running:

1. Open command prompt and navigate to a directory you would like the project in. Enter the command
`git clone https://github.com/justsayno/RaygunDemo`

2. Open  the solution in Visual Studio

3. Open the file  `RaygunDemo.WebApi/web.config` and find the config setting for raygun and enter your Raygun WebApi application's key `<RaygunSettings apikey="** Put Key Here ***" />`

3. Right click on the RaygunDemo.WebApi in solution explorer and select it as the startup project. Start the application.

4. Rename the file found at `RaygunDemo.WebApi/scripts/raygunConfig-sample.js` to `raygunConfig.js` and enter your Raygun App application.

5. Open the command window again. Enter the command `cd RaygunDemo` then `npm install` and `bower install` 

6. Enter the command `grunt serve` to run the JavaScript application

This project was based on the what was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview. Run `grunt serve:dist` to get a local version of
the production build.

## Testing

Running `grunt test` will run the unit tests with karma.

## Final Note

This is also a structure of project I have come up with for creating JavaScript only front end and WebAPi back ends using both
Visual Studio and Yeoman.io generator. Look at my instructions for doing so here:

[Creating an angular app and WebApi app with Yeoman and Visual Studio](creating-project-structure.md)
