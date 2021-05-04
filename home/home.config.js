function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  }).state('add', {
    url: 'add',
    controller: 'AddCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/add.html'
  });

};

export default HomeConfig;