/**
 * 
 */
package com.events.service;

import static org.junit.Assert.*;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.events.entities.Post;
import com.events.repositories.PostRepository;

/**
 * @author jadhavk
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:META-INF/application-context.xml")
public class PostRepositoryTest {
	
	@Autowired
	PostRepository repo;

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void test() {
		
		Post p = new Post();
		p.setDate(new Date());
		p.setPostName("post1");
		
		p = repo.save(p);
		
		repo.findOne(p.getPostId());
		assertNotNull(p);
		System.out.println(p.getPostId());
		//fail("Not yet implemented");
	}

}
