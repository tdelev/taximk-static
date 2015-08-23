angular.module("taximk").run(["$templateCache", function($templateCache) {$templateCache.put("views/companies.html","<div class=\"page-header\">\n  <h1>\n    <span ng-if=\"company.place\">{{ company.place.name }}</span>\n    <span ng-if=\"!company.place\">Македонија</span>\n    <small>({{ company.taxi.length }})</small>\n  </h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-offset-8 col-md-4\">\n    <input type=\"text\" ng-model=\"search_taxi\" placeholder=\"Пребарај такси...\"\n           class=\"form-control search-taxi\"/>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 col-sm-6 col-lg-4\" ng-repeat=\"t in company.taxi | orderBy: \'name\' | filter:search_taxi\">\n    <div class=\"panel panel-default taxi-item\">\n      <div class=\"panel-heading\">\n        <h2 title=\"{{ t.description }}\"><i class=\"fa fa-fw fa-taxi icon-header\"></i> {{ t.name }}</h2>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-xs-6 col-sm-6\">\n            <h4>\n              <i class=\"fa fa-fw fa-phone\"></i>\n              <a href=\"tel:{{ t.phone }}\" title=\"Кликни да го повикаш ова такси\">{{ t.phone }}</a>\n            </h4>\n          </div>\n          <div class=\"col-md-6 col-xs-6 col-sm-6\">\n            <h4 ng-if=\"t.phone2\">\n              <i class=\"fa fa-fw fa-phone-square\"></i>\n              <a href=\"tel:{{ t.phone2 }}\" title=\"Кликни да го повикаш ова такси\"> {{ t.phone2 }} </a>\n            </h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-footer\">\n        <i class=\"fa fa-fw fa-home\"></i>\n        <strong><a ui-sref=\"taxi({ placeId : t.place.id, slug : t.place.slug })\">{{ t.place.name }}</a></strong>\n        <span title=\"{{ t.address }}\" ng-if=\"t.address\">- {{ t.address | limitTo: 30 }}</span>\n        <span ng-if=\"t.address.length > 30\" title=\"{{ t.address }}\">...</span>\n      </div>\n    </div>\n  </div>\n</div>");}]);