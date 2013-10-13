package com.events.web.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.events.api.service.EventsService;
 
@Controller
public class ApplicationController {
 
	@RequestMapping(value="/",method = RequestMethod.GET)
	public String getEventsInformation(ModelMap model) {
 
		//model.addAttribute("message", "Spring 3 MVC Hello World");
		System.out.println( "In controller");
	
		return "index";
		
	}
 
	
	
}