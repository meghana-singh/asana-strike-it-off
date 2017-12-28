## List the tasks under StrikeItOff Project in Asana
This app lists all the tasks under the project - StrikeItOff (ID: 510750020413990).
* These tasks can be hidden from the view using the button provided next to the task.
* It's configured as Single-Page-Application with AngularJS.
* It uses Grunt to run a simple server on port 3000.

## Configuration

$ git clone https://github.com/meghana-singh/asana-strike-it-off.git <your-frontend-project-name>


The project uses Grunt to run tasks in development. 

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



