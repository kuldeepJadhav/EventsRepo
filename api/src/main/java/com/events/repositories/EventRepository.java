package com.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.events.entities.Event;
import com.events.entities.Organization;

public interface EventRepository extends JpaRepository<Event, Integer>{ 
	
	List<Event> findByOrg(Organization orgId);

}
