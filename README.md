# raygun-demo

This is a raygun demo project. The application is a very simple AngularJS client with an ASP.NET
WEBAPI back end. All the application really does is has buttons to create errors in different
ways. Below describes the steps to get the site running:

1. Open command prompt and navigate to a directory you would like the project in. Enter the command
`git clone https://github.com/justsayno/RaygunDemo`

2. Open  the solution in Visual Studio

3. Start the application. This will runn the RaygunDemo.WebApi project

4. Rename the file foudn at `scripts/raygunConfig-sample.js` to `raygunConfig.js`

5. Open the command window again. Enter the command `cd RaygunDemo` then `npm install` and `bower install` 

6. Enter the command `grunt serve`

This project was based on the what was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview. Run `grunt serve:dist` to get a local version
the production build.

## Testing

Running `grunt test` will run the unit tests with karma.
