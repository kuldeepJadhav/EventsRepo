/**
 * 
 */
package com.events.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author jadhavk
 *
 */
@Entity
@Table(name="POST")
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="post_id")
	Integer postId;
	@Column(name="post_name")
	String postName;
	@Column(name="date")
	Date date;
	/**
	 * @return the postId
	 */
	public Integer getPostId() {
		return postId;
	}
	/**
	 * @param postId the postId to set
	 */
	public void setPostId(Integer postId) {
		this.postId = postId;
	}
	/**
	 * @return the postName
	 */
	public String getPostName() {
		return postName;
	}
	/**
	 * @param postName the postName to set
	 */
	public void setPostName(String postName) {
		this.postName = postName;
	}
	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}
	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}
	
	
}
