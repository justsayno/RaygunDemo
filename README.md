# raygun-demo

>Note: In order to get this application running you need to folow the following instructions to install all the pre-requisites:
>https://github.com/justsayno/fhf-demo/blob/master/setting-up-your-environment.md


This is a raygun demo project. The application is a very simple AngularJS client with an ASP.NET
WEBAPI back end. All the application really does is has buttons to create errors in different
ways. This assumes you have got a free trail of Raygun and have set up one application for
JavaScript and one for ASP.NET WebAPI at http://raygun.io. 

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

Run `grunt` for building and `grunt serve` for preview. Run `grunt serve:dist` to get a local version
the production build.

## Testing

Running `grunt test` will run the unit tests with karma.
