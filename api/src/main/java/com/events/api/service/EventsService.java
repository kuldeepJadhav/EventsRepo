/**
 * 
 */
package com.events.api.service;

import java.util.List;
import java.util.Map;

import com.events.api.service.Constants.EventType;
import com.events.entities.Event;

/**
 * @author jadhavk
 *
 */
public interface EventsService {
	List<Event> getEventsForOrganization(Integer orgId);
	
	Map<EventType,List<Event>> arrangeEventsForOrganizationByType(Integer orgId);
}
