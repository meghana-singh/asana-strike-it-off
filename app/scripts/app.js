//To display different templates in the view (ui-view), UI Router is used.
//Controllers are instantiated on an as-needed basis, when their corresponding scopes are created.
//home is the landing page template and the only controller in this web app.

(function() {
       function config($stateProvider, $locationProvider) {

         $locationProvider
             .html5Mode({
                 enabled: true, //!# display is disabled in the URL
                 requireBase: false
             });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'                 
             });
    }

   //Below we are setting default headers at run time using $http.defaults object.
   //Authorization is done using Personal Access Token.

   function setAuthHeader ($http) {
     $http.defaults.headers.common.Authorization = 'Bearer 0/edf8a8843d0590b80884e98d980a57eb';
   }

    //UI Router module, UI Bootstrapp are injected as dependency into our application.
    angular
        .module('strikeItOff', ['ui.router', 'ui.bootstrap', 'ngSanitize']) 
        .config(config)
        .run(['$http', setAuthHeader]);
})();
