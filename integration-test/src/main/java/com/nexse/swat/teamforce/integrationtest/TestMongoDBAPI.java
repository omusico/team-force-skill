package com.nexse.swat.teamforce.integrationtest;

import com.mongodb.*;
import com.mongodb.util.JSON;

import java.net.UnknownHostException;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * @author germano giudici
 *         Date: 25/11/12
 *         Time: 14:38
 */
public class TestMongoDBAPI {
    private static final String JSON_STRING = "{" +
            "\"id\":\"2\"," +
            "\"companyNumber\":\"1\"," +
            "\"name\":\"Alessio\"," +
            "\"surname\":\"Giannetti\"," +
"\"skills\": ["+
"{"+
"\"name\":\"JAVA\","+
"\"stars\": 4,"+
"\"comment\":\"\""+
"},"+
"{"+
"\"name\":\"JAVASCRIPT\","+
"\"stars\": 1,"+
"\"comment\":\"I'm learning\""+
"}"+
"],"+
"\"spa-questions\": ["+
"{"+
"\"name\":\"HTML5\","+
"\"comment\":\"Conosco HTML5\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"WEBWORKER\","+
"\"comment\":\"So che cosa è un web worker\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"HTML5BOILERPLATE\","+
"\"comment\":\"So a che cosa serve HTML5Boilerplate\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"CSS3\","+
"\"comment\":\"Conosco CSS3\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"BROWSERSTILE\","+
"\"comment\":\"So che cos'è uno stile che inizia per -webkitr\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"SAAS/COMPASS\","+
"\"comment\":\"Conosco SAAS/COMPASS\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"WEBWORKER\","+
"\"comment\":\"So che cosa è un web worker\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"TWITTERBOOTSTRAP\","+
"\"comment\":\"So a che cosa serve twitterbootstap\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JQUERY\","+
"\"comment\":\"Conosco jquery\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JQUERYPLUGIN\","+
"\"comment\":\"So creare un plugin di jquery\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"WEBSOCKET\","+
"\"comment\":\"Conosco il protocollo web socket\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"HARMONY\","+
"\"comment\":\"So che cosa è Harmony\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"ANGULAR\","+
"\"comment\":\"Conosco angular.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"KNOCKOUT\","+
"\"comment\":\"Consoco Knockout.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"BACKBONE\","+
"\"comment\":\"Conosco backbone.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"EMBER\","+
"\"comment\":\"Conosco ember.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSMODULE\","+
"\"comment\":\"Conosco il javascript module pattern\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"PATTERNMV\","+
"\"comment\":\"Conosco i pattern MV*\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"REQUIRE\","+
"\"comment\":\"Conosco Require.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"AMD\","+
"\"comment\":\"So che cosa è l'Asynchronous Module Definition (AMD)\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSGOODPARTS\","+
"\"comment\":\"Conosco il libro\\\"javascript the good parts\\\"\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSPATTERNS\","+
"\"comment\":\"Conosco il libro\\\"Javascript Patterns\\\"\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"V8\","+
"\"comment\":\"So che cos'è V8\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"CHROMECONSOLE\","+
"\"comment\":\"So usare la console di chrome\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"DEVTOOLS\","+
"\"comment\":\"So usare i chrome dev tools\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"FIREBUG\","+
"\"comment\":\"So usare firebug\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSPATTERNS\","+
"\"comment\":\"Conosco il libro\\\"Javascript Patterns\\\"\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"CHROMEEXT\","+
"\"comment\":\"So sviluppare un estensione di chrome\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"FIREFOXEXT\","+
"\"comment\":\"So sviluppare un estensione di firefox\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"YEOMAN\","+
"\"comment\":\"Conosco il tool yeoman\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"NODE\","+
"\"comment\":\"Conosco node.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"NPM\","+
"\"comment\":\"Conosco npm\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JASMINE\","+
"\"comment\":\"Conosco jasmine.js\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"IRISH\","+
"\"comment\":\"Seguo Paul Irish\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"OSMANI\","+
"\"comment\":\"Seguo Andy Osmani\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"ZAKAS\","+
"\"comment\":\"Seguo Nicholas C. Zakas\","+
"\"stars\": 0"+
"}"+
"],"+
"\"fe-server-questions\": ["+
"{"+
"\"name\":\"SERVLET\","+
"\"comment\":\"Conosco la specifica servlet\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSP\","+
"\"comment\":\"Conosco la specifica jsp\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"JSF\","+
"\"comment\":\"Conosco la specifica jsf\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"SPRINGMVC\","+
"\"comment\":\"Conosco spring MVC\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"SPRINGSECURITY\","+
"\"comment\":\"Conosco spring SECURITY\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"STRUTS\","+
"\"comment\":\"Conosco STRUTS\","+
"\"stars\": 0"+
"},"+
"{"+
"\"name\":\"MVC\","+
"\"comment\":\"Conosco il pattern MVC\","+
"\"stars\": 0"+
"}"+
"]"+
"}";

    public static void main(String[] args) throws UnknownHostException {
        Mongo m = new Mongo("localhost", 27017);
        List<String> dbdatabaseNames = m.getDatabaseNames();
        for (String databaseName : dbdatabaseNames) {
            System.out.println("databaseName = " + databaseName);
        }
        DB mydb = m.getDB("mydb");
        DBCollection collection = mydb.getCollection("prova");
        collection.save((DBObject) JSON.parse(JSON_STRING));
        Set<String> collectionNames = mydb.getCollectionNames();
        for (String collectionName : collectionNames) {
            System.out.println("collectionName = " + collectionName);
        }
        DBCursor cursor = collection.find();
        Iterator<DBObject> iterator = cursor.iterator();
        while (iterator.hasNext()) {
            DBObject next = iterator.next();
            System.out.println("object = [" + next.toString() + "]");
        }
        System.out.println("cursor = [" +cursor.size() + "]");


    }
}
