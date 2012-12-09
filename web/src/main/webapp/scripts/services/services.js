teamForceApp.factory('mongoProxy', function ($resource) {
    return $resource('rest/people/find/:name/:surname/:skill', {}, {
        query:{method:'GET', params:{name:"allname",surname:"allsurname",skill:"allskill"}, isArray:true}
    });
});

teamForceApp.factory('peopleService', ['questionTemplate', 'mongoProxy', function (questionTemplate, mongoProxy) {
    return {


        getPersonFromIdAndTemplateName:function (id,templateId) {
            //recupero la current person da Mongo
            // passandogli l'id ed il nome del template (quando salvo metto il nome del template)
            //sul server nel caso nn esista viene creato senza nome del template
            //nel caso sia un nuovo inserimento devo fare enrichment con i campi del template
            //faccio enrichment con il template
            var currPerson = teamForceSkillsTestData.getPersonDetail(1);
            if(!currPerson["template-id"] || !currPerson["template-id"]===templateId){
                angular.extend(currPerson, questionTemplate);
            }
            debugger;
            return currPerson;
        }
    };
}]);

teamForceApp.factory('questionTemplate', function ($resource) {
    var templates = {
        "template-id":"template1",

        "stars-default":{
            stars:0
        },

        "spa-questions":[
            {
                name:"HTML5",
                comment:"Conosco HTML5"
            },
            {
                name:"WEBWORKER",
                comment:"So che cosa è un web worker"
            },
            {
                name:"HTML5BOILERPLATE",
                comment:"So a che cosa serve HTML5Boilerplate"
            },
            {
                name:"CSS3",
                comment:"Conosco CSS3"
            },
            {
                name:"BROWSERSTILE",
                comment:"So che cos'è uno stile che inizia per -webkitr"
            },
            {
                name:"SAAS/COMPASS",
                comment:"Conosco SAAS/COMPASS"
            },
            {
                name:"WEBWORKER",
                comment:"So che cosa è un web worker"
            },
            {
                name:"TWITTERBOOTSTRAP",
                comment:"So a che cosa serve twitterbootstap"
            },
            {
                name:"JQUERY",
                comment:"Conosco jquery"
            },
            {
                name:"JQUERYPLUGIN",
                comment:"So creare un plugin di jquery"
            },
            {
                name:"WEBSOCKET",
                comment:"Conosco il protocollo web socket"
            },
            {
                name:"HARMONY",
                comment:"So che cosa è Harmony"
            },
            {
                name:"ANGULAR",
                comment:"Conosco angular.js"
            },
            {
                name:"KNOCKOUT",
                comment:"Consoco Knockout.js"
            },
            {
                name:"BACKBONE",
                comment:"Conosco backbone.js"
            },
            {
                name:"EMBER",
                comment:"Conosco ember.js"
            },
            {
                name:"JSMODULE",
                comment:"Conosco il javascript module pattern"
            },
            {
                name:"PATTERNMV",
                comment:"Conosco i pattern MV*"
            },
            {
                name:"REQUIRE",
                comment:"Conosco Require.js"
            },
            {
                name:"AMD",
                comment:"So che cosa è l'Asynchronous Module Definition (AMD)"
            },
            {
                name:"JSGOODPARTS",
                comment:"Conosco il libro \"javascript the good parts\""
            },
            {
                name:"JSPATTERNS",
                comment:"Conosco il libro \"Javascript Patterns\""
            },
            {
                name:"V8",
                comment:"So che cos'è V8"
            },
            {
                name:"CHROMECONSOLE",
                comment:"So usare la console di chrome"
            },
            {
                name:"DEVTOOLS",
                comment:"So usare i chrome dev tools"
            },
            {
                name:"FIREBUG",
                comment:"So usare firebug"
            },
            {
                name:"JSPATTERNS",
                comment:"Conosco il libro \"Javascript Patterns\""
            },
            {
                name:"CHROMEEXT",
                comment:"So sviluppare un estensione di chrome"
            },
            {
                name:"FIREFOXEXT",
                comment:"So sviluppare un estensione di firefox"
            },
            {
                name:"YEOMAN",
                comment:"Conosco il tool yeoman"
            },
            {
                name:"NODE",
                comment:"Conosco node.js"
            },
            {
                name:"NPM",
                comment:"Conosco npm"
            },
            {
                name:"JASMINE",
                comment:"Conosco jasmine.js"
            },
            {
                name:"IRISH",
                comment:"Seguo Paul Irish"
            },
            {
                name:"OSMANI",
                comment:"Seguo Andy Osmani"
            },
            {
                name:"ZAKAS",
                comment:"Seguo Nicholas C. Zakas"
            }
        ],
        "dev-segment":{
            name:"MICROSOFT",
            comment:"tecnologie di sviluppo Microsoft"
        },
        "fe-server-questions":[
            {
                name:"SERVLET",
                comment:"Conosco la specifica servlet"
            },
            {
                name:"JSP",
                comment:"Conosco la specifica jsp"
            },
            {
                name:"JSF",
                comment:"Conosco la specifica jsf"
            },
            {
                name:"SPRINGMVC",
                comment:"Conosco spring MVC"
            },
            {
                name:"SPRINGSECURITY",
                comment:"Conosco spring SECURITY"
            },
            {
                name:"STRUTS",
                comment:"Conosco STRUTS"
            },
            {
                name:"MVC",
                comment:"Conosco il pattern MVC"
            }
        ]};



    return {
        "spa-questions":function () {
            var ret = [];
            angular.copy(templates["spa-questions"], ret);
            angular.forEach(ret, function (obj) {
                angular.extend(obj, templates["stars-default"]);
            });
            return ret;
        }(),
        "fe-server-questions":function () {
            var ret = [];
            angular.copy(templates["fe-server-questions"], ret);
            angular.forEach(ret, function (obj) {
                angular.extend(obj, templates["stars-default"]);
            });
            return ret;
        }()

    }

});