package com.events.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.events.entities.Group;

public interface GroupRepository extends JpaRepository<Group, Integer>{ 

}
