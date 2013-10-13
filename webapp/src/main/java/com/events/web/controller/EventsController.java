package com.events.web.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.events.api.service.EventsService;
 
@Controller
@RequestMapping("/api/json")
public class EventsController {
 
	@Autowired()
	@Qualifier("eventservice")
	EventsService eventsService;
	@RequestMapping(value="/events-info.json",method = RequestMethod.GET)
	public @ResponseBody String getEventsInformation(ModelMap model) {
 
		//model.addAttribute("message", "Spring 3 MVC Hello World");
		System.out.println( "In controller");
	
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("streams", "streams");
		
		return "xoz";
	}
 
	
	
}