package com.events.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.events.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer>{ 

}
