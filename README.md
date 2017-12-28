## List the tasks under StrikeItOff Project in Asana
This app lists all the tasks under the project - StrikeItOff (ID: 510750020413990).
* These tasks can be hidden from the view using the button provided next to the task.
* It's configured as Single-Page-Application with AngularJS.
* It uses Grunt to run a simple server on port 3000.

## Configuration

$ git clone https://github.com/meghana-singh/asana-strike-it-off.git <your-frontend-project-name>

## Install the project dependencies by running:

$ npm install

## Run the Application

Run the application using the Gruntfile's `default` task:

$ grunt

The default task runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).


## Directory Structure

```
├── Gruntfile.js
├── LICENSE
├── Procfile
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── asana_logo.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   │   └── controllers
│   │       └── HomeCtrl.js
│   │   └── controllers
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js

## Description of Files
index.html 
* Default HTML file which has all the header information and scripts. 
* The root element (ngApp) Angular app - strikeItOff is bootstraped to the <HTML> element.
* <ui-view><ui-view> To render the view template

app.js
* Has UI-Router which takes care of replacing the contents of <ui-view></ui-view> with a template when a user navigates to the proper route. 
  only one view template is used here - home.html
* All the external dependecies are injected into the strikeItOff Module here - Bootstrap and UI Router.
* The default header authorization for the GET API call is set here using the personal access token.

HomeCtrl.js
* Controller contains logic to make API call to Asana and function that controls the hide/show of tasks.

Home.html
* The home template for viewing the list of tasks. ng-repeat and ng-hide directives were used to display and hide the tasks.


