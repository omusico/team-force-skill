'use strict';

teamForceApp.controller('SearchController', function ($scope,$rootScope,mongoProxy) {

    $scope.skills = teamForceSkillsTestData.skills;
    $scope.datas = teamForceSkillsTestData.skills;
    $scope.searchPeople = function (name, surname, skill) {
        //$scope.people = teamForceSkillsTestData.getPeople(name,surname,skill);
        mongoProxy.query({name:$scope.nameFilter || 'allname',surname:$scope.surnameFilter || 'allsurname', skill:$scope.skillToSearch || 'allskill'},function(data){
            $scope.people=data;
        });
    }


    $scope.setCurrentPerson=function(person){
        $rootScope.currentSelectedPerson=person;
    }

});


teamForceApp.controller('PersonController', function ($scope,$rootScope) {
    $scope.datas = teamForceSkillsTestData.skills;
    $scope.newSkill = '';
    $scope.addNewSkill = function (newSkill) {
        if (newSkill.length === 0) return;
        var currPerson = $rootScope.currentSelectedPerson;
        var isSkillPresent = currPerson.skills.filter(function (ob) {
            return ob.name === newSkill;
        }).length > 0;
        if (!isSkillPresent) {
            currPerson.skills.push({name:newSkill, stars:3, comment:""});
            teamForceSkillsTestData.skills.push(newSkill);
        };
    }
    $scope.removeSkill = function (skillName) {
        if (skillName.length === 0) return;
        var currPerson = $rootScope.currentSelectedPerson;
        var skills = currPerson.skills.filter(function (ob) {
            return ob.name === skillName;
        });
        if (skills.length === 1) {
            currPerson.skills.pop(skills[1]);
        }
        ;
    }
});


teamForceApp.controller('NewPersonController', ['$scope','peopleService',function ($scope,peopleService) {

    $scope.datas = teamForceSkillsTestData.skills;
    $scope.newSkill = '';
    $scope.currentSelectedPerson = peopleService.getPersonFromIdAndTemplateName("1","my-template-id");
    $scope.addNewSkill = function (newSkill) {
        if (newSkill.length === 0) return;
        var currPerson = $scope.currentSelectedPerson;
        var isSkillPresent = currPerson.skills.filter(function (ob) {
            return ob.name === newSkill;
        }).length > 0;
        if (!isSkillPresent) {
            currPerson.skills.push({name:newSkill, stars:3, comment:""});
            teamForceSkillsTestData.skills.push(newSkill);
        };
    }
    $scope.removeSkill = function (skillName) {
        if (skillName.length === 0) return;
        var currPerson = $scope.currentSelectedPerson;
        var skills = currPerson.skills.filter(function (ob) {
            return ob.name === skillName;
        });
        if (skills.length === 1) {
            currPerson.skills.pop(skills[1]);
        }
        ;
    }
}]);

