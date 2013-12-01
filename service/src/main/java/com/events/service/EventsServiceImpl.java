/**
 * 
 */
package com.events.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.events.api.service.Constants.EventType;
import com.events.api.service.EventsService;
import com.events.entities.Event;
import com.events.entities.Organization;
import com.events.repositories.EventRepository;
import com.events.repositories.OrganizationRepository;

/**
 * @author jadhavk
 *
 */
public class EventsServiceImpl implements EventsService {

	@Autowired
	OrganizationRepository orgRepo;
	
	@Autowired
	EventRepository eventRepo;
	
	@Override
	public List<Event> getEventsForOrganization(Integer orgId) {
		if(orgId!=null){
			Organization organization = orgRepo.findOne(orgId);
			if(organization!=null){
				return eventRepo.findByOrg(organization);
			}
		}
		return null;
	}

	@Override
	public Map<EventType, List<Event>> arrangeEventsForOrganizationByType(
			Integer orgId) {
		List<Event> eventsForOrganization = this.getEventsForOrganization(orgId);
		Map<EventType , List<Event>> eventsByType = new HashMap<EventType,List<Event>>();
		for(Event e : eventsForOrganization){
			EventType eventType = e.getEventType();
			if(eventsByType.containsKey(eventType)){
				List<Event> list = eventsByType.get(eventType);
				list.add(e);
			}else{
				List<Event> list = new ArrayList<Event>();
				list.add(e);
				eventsByType.put(e.getEventType(), list);
			}
		}
		return eventsByType;
	}
	
	
	

	 
	
	
}
