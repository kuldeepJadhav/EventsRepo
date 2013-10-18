package com.events.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.events.entities.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{

}
