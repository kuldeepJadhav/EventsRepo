/**
 * 
 */
package com.events.service;

import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.events.api.service.Constants.EventType;
import com.events.api.service.Constants.OrganizationType;
import com.events.entities.Event;
import com.events.entities.Group;
import com.events.entities.Organization;
import com.events.repositories.GroupRepository;
import com.events.repositories.OrganizationRepository;

/**
 * @author jadhavk
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:META-INF/application-context.xml")
public class GroupRepositoryTest {
	
	@Autowired
	GroupRepository repo;

	@Autowired
	OrganizationRepository orgRepo;
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testSaveOrganization() {
		Organization org = new Organization();
		org.setOrganizationName("testing manay to manuy");
		Organization organization = orgRepo.save(org);
		List<Event> list = new ArrayList<Event>();
		Event e1 =new Event();
		e1.setAmountPerPerson(100);
		e1.setContactNumber(9421010243d);
		e1.setCreatedBy("test");
		e1.setCreatedOn(new Date());
		e1.setEmailId("kuldeep.jadhav@live.com");
		e1.setEventName("testEvent1");
		e1.setEventPlace("pune");
		e1.setEventType(EventType.TECHNICAL);
		e1.setGroupsEnrolled(10);
		e1.setIsActive(true);
		e1.setMaxGroupAllowed(3);
		e1.setMinPeoplePerGroup(1);
		e1.setOrg(organization);
	//	List<Group> grpList = new ArrayList<Group>();
		Group g = new Group();
		g.setGroupName("grp1");
		
		//grpList.add(g);
		//e1.setGroupList(grpList);
		list.add(e1);
		
		g.setEventList(list);
		
		repo.save(g);
		
	}

}
