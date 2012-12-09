package com.nexse.swat.teamforce.rest;

import org.jongo.marshall.Marshaller;
import org.jongo.marshall.MarshallingException;

/**
 * @author germano giudici
 *         Date: 07/12/12
 *         Time: 17:07
 */
public class CustomMarshaller implements Marshaller {
    @Override
    public <T> String marshall(T obj) throws MarshallingException {
        throw new UnsupportedOperationException();
    }
}
