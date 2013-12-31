/**
 * 
 */
package com.events.web.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.events.api.service.Constants.EventType;
import com.events.entities.Event;
import com.web.response.ContactInfoJson;
import com.web.response.EventDetailsJson;
import com.web.response.EventJson;
import com.web.response.EventsJsonResponse;

/**
 * @author jadhavk
 *
 */
public class JsonUtil {
	
	public static List<EventsJsonResponse> populateJsonObject(Map<EventType, List<Event>> eventsData ){
		List<EventsJsonResponse> events = new ArrayList<EventsJsonResponse>();
		for(EventType eventType :eventsData.keySet()){
			List<Event> eventList = eventsData.get(eventType);
			EventsJsonResponse jsonResponse = new EventsJsonResponse();
			jsonResponse.setEventType(eventType);
			for(Event e : eventList){
				EventJson eventJson = new EventJson();
				eventJson.setEventId(e.getEventId());
				eventJson.setEventMailId(e.getEmailId());
				eventJson.setEventName(e.getEventName());
				jsonResponse.getEventData().add(eventJson);
				EventDetailsJson eventDetailsJson = new EventDetailsJson();
				eventDetailsJson.setTime(e.getTimeStamp().toString());
				eventDetailsJson.setAmountPerPerson(e.getAmountPerPerson());
				eventDetailsJson.setTotalGroupsAllowed(e.getMaxGroupAllowed());
				eventDetailsJson.setGroupsEnrolled(e.getGroupsEnrolled());
				eventDetailsJson.setMaxNoOfPeopleInAGroup(e.getMaxPeoplePerGroup());
				eventDetailsJson.setMinNoOfPeopleInAGroup(e.getMinPeoplePerGroup());
				eventDetailsJson.setFacebookUrl(e.getFacebookUrl());
				eventDetailsJson.setTwitterUrl(e.getTwitterUrl());
				eventDetailsJson.setPictureUrl(e.getPictureUrl());
				ContactInfoJson contactInfoJson = new ContactInfoJson();
				contactInfoJson.setPhone(e.getContactNumber().intValue());
				eventDetailsJson.getContactInfo().add(contactInfoJson);
				jsonResponse.getEventData().add(eventJson);
			}
			events.add(jsonResponse);
		}
		return events;
	}

}
