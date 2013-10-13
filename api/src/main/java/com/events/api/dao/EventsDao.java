package com.events.api.dao;

import java.util.List;

import com.events.api.pojo.Event;

public interface EventsDao extends AbstractDao<Event>{
	
	public List<Event> getAllEvents();

}
