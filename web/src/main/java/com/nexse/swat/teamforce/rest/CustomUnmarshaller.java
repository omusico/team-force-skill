package com.nexse.swat.teamforce.rest;

import org.jongo.marshall.MarshallingException;
import org.jongo.marshall.Unmarshaller;

/**
 * @author germano giudici
 *         Date: 07/12/12
 *         Time: 17:09
 */
public class CustomUnmarshaller implements Unmarshaller {
    @Override
    public <T> T unmarshall(String json, Class<T> clazz) throws MarshallingException {
        return (T) json;
    }
}
