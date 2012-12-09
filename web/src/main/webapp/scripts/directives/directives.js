'use strict';


teamForceApp.
    directive('typeAhead',function () {
        return {
            restrict:'E',
            replace:true,
            scope:{
                outData:'=',
                sourceData:'='
            },

            template:'<input type="text">',
            link:function (scope, element) {
                element.typeahead({
                    source:scope.sourceData
                });
                element.change(function () {
                    scope.$apply(function () {
                        scope.outData = $(element).val().toUpperCase();
                    });
                    scope.$apply();

                })


            }
        }
    }).directive('stars',function ($templateCache, $document, $compile) {
        return {
            restrict:'E',
            //    transclude: true,
            replace:true,
            scope:{
                ngStars:'=',
                onClick:"&"
            },
            template:'<span><i ng-repeat="nb in [1,2,3,4,5]" class="{{isChosen(nb)}}" ng-click="chooseValue(nb)"></i> {{ngStars}}</span>',

            controller:function ($scope, $element, $attrs, $location) {
                var chosen = $attrs.chosenStyle,
                    clickable = $attrs.clickableStyle;
                $scope.isChosen = function (value) {
                    if ($scope.ngStars >= value) {
                        return chosen
                    } else {
                        return clickable
                    }
                    ;
                };
                $scope.chooseValue = function (val) {
                    if ($scope.isChosen(val) === chosen) {
                        if ($scope.ngStars == val)
                            $scope.ngStars = val - 1;
                        else
                            $scope.ngStars = val;
                    } else {
                        $scope.ngStars = val;
                    }
                    $scope.onClick();
                };
            }
        }
    }).directive('openTab', function () {
        return {
            restrict:'A',
            link:function (scope, element, $attrs) {
                var tabSelector = $attrs.openTab;
                element.click(function () {
                    $(tabSelector).tab("show");
                });

            }
        }
    });