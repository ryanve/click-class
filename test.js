typeof document == 'undefined' ?
  require('open')('index.html') :
angular.module('test', ['clickClass']).controller('test', ['$timeout', '$scope', function($timeout, $scope) {

  $('[click-class]').each(function() {
    var $this = $(this)

    function test() {
      $('html').addClass('is-testing')
      $this.click()
    }

    function apply() {
      $scope.$apply(test)
    }

    $timeout(apply).then(function() {
        $timeout(apply).then(function() {
          $('html').removeClass('is-testing')
          console.log('Test Passed', $this)
        })
    })
  })

}]);
