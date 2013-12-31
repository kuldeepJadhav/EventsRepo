
package com.events.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.events.api.service.Constants.EventType;
import com.events.api.service.EventsService;
import com.events.entities.Event;
import com.events.web.util.JsonUtil;
import com.web.response.EventsJsonResponse;



 
@Controller
@RequestMapping("/api/json")
public class EventsController {
	@Autowired()
	@Qualifier("eventservice")
	EventsService eventsService;
	
	
	@RequestMapping(value="/events-info.json",method = RequestMethod.GET)
	public @ResponseBody Map<String,List<EventsJsonResponse>> getEventsInformation(ModelMap model) {
		Map<EventType, List<Event>> eventsData = eventsService.arrangeEventsForOrganizationByType(21);
		List<EventsJsonResponse> jsonResp = JsonUtil.populateJsonObject(eventsData);
		Map<String,List<EventsJsonResponse>> resp = new HashMap<String, List<EventsJsonResponse>>();
		resp.put("events", jsonResp);
		return resp;
	}
}