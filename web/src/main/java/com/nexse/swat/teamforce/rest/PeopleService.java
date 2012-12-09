package com.nexse.swat.teamforce.rest;


import com.mongodb.Mongo;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.PrintWriter;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author germano giudici
 *         Date: 06/12/12
 *         Time: 17:13
 */
@Path("/people")
public class PeopleService {
    @GET
    @Path("/find/{name}/{surname}/{skill}")
    public Response find(@PathParam("name") String name, @PathParam("surname") String surname, @PathParam("skill") String skill) throws UnknownHostException {

        Mongo mongo = new Mongo("127.0.0.1", 27017);
        Jongo jongo = new Jongo(mongo.getDB("mydb"), new CustomMarshaller(), new CustomUnmarshaller());
        MongoCollection friends = jongo.getCollection("prova");

        List<String> filters = new ArrayList<String>();
        if (!name.equals("allname")) {
            filters.add("name :'" + name + "'");
        }
        if (!surname.equals("allsurname")) {
            filters.add("surname :'" + surname + "'");
        }
        if (!skill.equals("allskill")) {
            filters.add("skill :'" + skill + "'");
        }

        StringBuilder filtersJson = new StringBuilder();
        filtersJson.append("{");
        for (String filter : filters) {
            filtersJson.append(filter);
            filtersJson.append(",");
        }
        filtersJson.deleteCharAt(filtersJson.length() - 1);
        filtersJson.append("}");

        Iterable<String> all = friends.find(filtersJson.toString()).as(String.class);

        StringBuilder buff = new StringBuilder();
        buff.append("[");
        for (String s : all) {
            buff.append(s);
            buff.append(',');
        }
        buff.deleteCharAt(buff.length() - 1);
        buff.append("]");

/*
        Friend one = friends.findOne("{name:'John'}");
        DB mydb = m.getDB("mydb");
        DBCollection collection = mydb.getCollection("prova");
        DBObject query = new BasicDBObject("name", new BasicDBObject("$e",name));
        DBCursor cursor = collection.find();
        Iterator<DBObject> iterator = cursor.iterator();


        for (String s : all) {

        }

        Iterator<String> iterator = all.iterator();
        StringBuffer buff = new StringBuffer();
        buff.append("[");
            int counter = 0;
            while (iterator.hasNext()) {
                String next = iterator.next();
                buff.append(next);
                if (counter < all.iterator().) {
                    buff.append(",");
                }
                counter++;
        }
        buff.append("]");
        return Response.ok(buff.toString()).header("Content-Type", "application/json;charset=UTF-8").build();
    }
*/
        String ret = buff.toString();
        return Response.ok(ret).header("Content-Type", "application/json;charset=UTF-8").build();

    }
}
