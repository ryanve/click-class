!function(root, name, make) {
  (window.angular || require('angular')).module(name, []).directive(name, make = make())
  typeof module != 'undefined' && module.exports ? module.exports = make : root[name] = make
}(this, 'clickClass', function() {
  return function() {
    var angular = window.angular || require('angular')

    function toggle(classes, selector) {
      angular.element(selector).toggleClass(classes)
    }

    return {
      restrict: 'A',
      link: function (scope, element, atts) {
        element.on('click', function() {
          var raw = atts.clickClass
          var map = scope.$eval(raw)
          angular.isObject(map) ? angular.forEach(map, toggle) : element.toggleClass(raw)
        })
      }
    }
  }
});
