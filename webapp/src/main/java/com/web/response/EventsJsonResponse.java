/**
 * 
 */
package com.web.response;

import java.util.List;

import com.events.api.service.Constants.EventType;

/**
 * @author jadhavk
 *
 */
public class EventsJsonResponse {
	private EventType eventType;
	private List<EventJson> eventData;
	/**
	 * @return the eventType
	 */
	public EventType getEventType() {
		return eventType;
	}
	/**
	 * @param eventType the eventType to set
	 */
	public void setEventType(EventType eventType) {
		this.eventType = eventType;
	}
	/**
	 * @return the eventData
	 */
	public List<EventJson> getEventData() {
		return eventData;
	}
	/**
	 * @param eventData the eventData to set
	 */
	public void setEventData(List<EventJson> eventData) {
		this.eventData = eventData;
	}
	
	
	
	
}
