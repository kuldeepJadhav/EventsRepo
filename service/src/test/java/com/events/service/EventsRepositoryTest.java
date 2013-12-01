package com.events.service;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.events.entities.Event;
import com.events.entities.Organization;
import com.events.repositories.EventRepository;
import com.events.repositories.OrganizationRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:META-INF/application-context.xml")
public class EventsRepositoryTest {
	
	@Autowired
	EventRepository repo;
	
	@Autowired
	OrganizationRepository orgRepo;
	
	@Test
	public void testFindByOrg(){
		Organization findOne = orgRepo.findOne(21);
		List<Event> findByOrg = repo.findByOrg(findOne);
		System.out.println(findByOrg);
	}


}
