function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '',
    controller: 'MainCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/main.html',
  });
}

export default HomeConfig;
