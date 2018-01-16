//Controller for Home Page
//It currently has one dependency injected into its dependency array - $http. 
//The callback function of the controller is HomeCtrl 
//It makes an API call to Asana Project - StrikeItOff to read the list of tasks under it.
//Has a function to hide a task from view when its selected.

(function(){
    function HomeCtrl ($scope, $http, $stateParams) {
      
      var that = this;

      this.taskHidden = [];
      this.tasksList  = [];

      this.id = /\d+/.exec($stateParams.project);

      var req = {
        method: 'GET',
        url: 'https://app.asana.com/api/1.0/projects/'+this.id+'/tasks'
      };

      $http(req).then(function(response) {
	         that.tasksList = response.data.data;
      });


     this.hideData = function(id) {
       this.taskHidden.indexOf(id) == -1 ? this.taskHidden.push(id) : this.taskHidden.splice(this.taskHidden.indexOf(id), 1);
     };

}

    angular
    .module('strikeItOff')
    .controller('HomeCtrl', ['$scope', '$http', '$stateParams', HomeCtrl]);
})();
