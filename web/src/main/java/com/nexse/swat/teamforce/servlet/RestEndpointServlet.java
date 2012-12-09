package com.nexse.swat.teamforce.servlet;

import com.mongodb.*;
import com.mongodb.util.JSON;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * @author germano giudici
 *         Date: 25/11/12
 *         Time: 17:44
 */

public class RestEndpointServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        Mongo m = new Mongo("localhost", 27017);
        DB mydb = m.getDB("mydb");
        DBCollection collection = mydb.getCollection("prova");
        DBCursor cursor = collection.find();
        Iterator<DBObject> iterator = cursor.iterator();
        PrintWriter writer = resp.getWriter();
        writer.print("[");
        StringBuffer buff = new StringBuffer();
        int counter = 0;
        while (iterator.hasNext()) {
            DBObject next = iterator.next();
            buff.append(next.toString());
            if (counter < cursor.length()-1) {
                buff.append(",");
            }
            counter++;
        }
        writer.print(buff.toString());
        writer.print("]");

    }
}
