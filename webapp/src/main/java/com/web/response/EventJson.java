/**
 * 
 */
package com.web.response;

/**
 * @author jadhavk
 *
 */
public class EventJson {
	private Integer eventId;
	private String eventName;
	private String eventMailId;
	private EventDetailsJson eventDetails = new EventDetailsJson();
	/**
	 * @return the eventId
	 */
	public Integer getEventId() {
		return eventId;
	}
	/**
	 * @param eventId the eventId to set
	 */
	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}
	/**
	 * @return the eventName
	 */
	public String getEventName() {
		return eventName;
	}
	/**
	 * @param eventName the eventName to set
	 */
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	/**
	 * @return the eventMailId
	 */
	public String getEventMailId() {
		return eventMailId;
	}
	/**
	 * @param eventMailId the eventMailId to set
	 */
	public void setEventMailId(String eventMailId) {
		this.eventMailId = eventMailId;
	}
	/**
	 * @return the eventDetails
	 */
	public EventDetailsJson getEventDetails() {
		return eventDetails;
	}
	/**
	 * @param eventDetails the eventDetails to set
	 */
	public void setEventDetails(EventDetailsJson eventDetails) {
		this.eventDetails = eventDetails;
	}
	
	
	
}
