package com.events.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.events.api.service.OrganizationService;
import com.events.entities.Event;
import com.events.repositories.OrganizationRepository;

public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	OrganizationRepository organizationRepository;
	
}
