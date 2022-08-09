import angular from 'angular';

// Create the module where our functionality can attach to
let mainModule = angular.module('main', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
mainModule.config(HomeConfig);

// Controllers
import MainCtrl from './main.controller';
mainModule.controller('MainCtrl', MainCtrl);

export default mainModule;
