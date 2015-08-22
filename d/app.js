(function () {
  'use strict';
  angular.module('taximk', ['ui.router']);

})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .controller('Company', Company);

  function Company(taxi, place) {
    var vm = this;
    vm.taxi = taxi;
    vm.place = place;
  }
})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .controller('Places', Places);

  function Places() {
    var vm = this;
    vm.places = PLACES;
  }
})();
(function () {
  'use strict';
  $(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
      $('.row-offcanvas').toggleClass('active');
    });
  });
})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .config(States);

  function States($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      templateUrl: 'views/companies.html',
      controller: 'Company',
      controllerAs: 'company',
      resolve: {
        taxi: function () {
          return TAXI;
        },
        place: function () {
          return null;
        }
      }
    }).state('taxi', {
      url: '/taxi/:placeId/:slug?',
      templateUrl: 'views/companies.html',
      controller: 'Company',
      controllerAs: 'company',
      resolve: {
        taxi: function ($stateParams, $filter) {
          if ($stateParams.placeId) {
            var taxi = $filter('filter')(TAXI, function (value, index) {
              return value.place.id == $stateParams.placeId;
            });
            return taxi;
          } else {
            return TAXI;
          }
        },
        place: function ($stateParams, $filter) {
          if ($stateParams.placeId) {
            var places = $filter('filter')(PLACES, function (value, index) {
              return value.id == $stateParams.placeId;
            });
            return places[0];
          } else {
            return null;
          }
        }
      }
    });
  }

})();