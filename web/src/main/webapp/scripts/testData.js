/*
 This file contains test data
 */

var teamForceSkillsTestData = function () {

    return {
        people:[
            {
                id:'1',
                companyNumber:'1234',
                name:'Germano',
                surname:'Giudici',
                skills:[
                    {
                        name:"JAVA",
                        stars:5,
                        comment:"I'm a champ"

                    },
                    {
                        name:"JAVASCRIPT",
                        stars:3,
                        comment:"I'm learning"
                    }
                ]
            },
            {
                id:'2',
                companyNumber:'1',
                name:'Alessio',
                surname:'Giannetti',
                skills:[
                    {
                        name:"JAVA",
                        stars:4,
                        comment:""

                    },
                    {
                        name:"JAVASCRIPT",
                        stars:1,
                        comment:"I'm learning"
                    }
                ]
            }

        ],
        skills:['JAVA', 'JAVASCRIPT', 'SCALA', 'RUBY'],
        getEnrichedPeople:function () {
            angular.forEach(teamForceSkillsTestData.people, function (obj) {
                obj["spa-questions"] = teamForceSkillsTestData.getNewSpaQuestions();
                obj["fe-server-questions"] = teamForceSkillsTestData.getNewFeServerQuestions();
            })
            teamForceSkillsTestData.getEnrichedPeople = function () {
                return teamForceSkillsTestData.people
            };
            return teamForceSkillsTestData.people;
        },
        getPeople:function (name, surname, skill) {
            var ret = teamForceSkillsTestData.getEnrichedPeople().filter(function (obj) {
                var ret = false;
                if (name && name.length > 0)
                    ret = ret || obj.name.toUpperCase().indexOf(name.toUpperCase()) !== -1;
                if (surname && surname.length > 0)
                    ret = ret || obj.surname.toUpperCase().indexOf(surname.toUpperCase()) !== -1;
                if (skill && skill.length > 0)
                    ret = ret || angular.toJson(obj.skills).indexOf('"name":"' + skill.toUpperCase() + '"') !== -1;
                return ret;
            })
            return ret;
        },
        getPersonDetail:function (id) {
            var filtered = teamForceSkillsTestData.getEnrichedPeople().filter(function (ob) {
                return ob.id === '' + id;
            })
            if (filtered.length === 1) return filtered[0];
        },

        getNewSpaQuestions:function () {
            var ret = [];
            angular.copy(teamForceSkillsTestData["spa-questions"], ret);
            angular.forEach(ret, function (obj) {
                angular.extend(obj, teamForceSkillsTestData["stars-default"]);
            })
            return ret;
        },
        getNewFeServerQuestions:function () {
            var ret = [];
            angular.copy(teamForceSkillsTestData["fe-server-questions"], ret);
            angular.forEach(ret, function (obj) {
                angular.extend(obj, teamForceSkillsTestData["stars-default"]);
            })
            return ret;
        }

    }


}();

