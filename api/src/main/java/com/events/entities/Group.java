package com.events.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="em_group")
public class Group {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="g_id")
	Integer groupId;
	
	@Column(name="g_name")
	String groupName;
	
	@Column(name="g_createdOn")
	Date createdOn;
	
	@Column(name="g_modifiedOn")
	Date modifiedOn;
	
	@Column(name="g_createdBy")
	String createdBy;
	
	@Column(name="g_modifiedBy")
	String modifiedBy;
	
	 @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	    @JoinTable(name = "em_event_group", joinColumns = @JoinColumn(name = "g_id",
	            referencedColumnName = "g_id"), inverseJoinColumns = @JoinColumn(name = "e_id",
	            referencedColumnName = "e_id"))
	List<Event> eventList = new ArrayList<Event>();

	/**
	 * @return the groupId
	 */
	public Integer getGroupId() {
		return groupId;
	}

	/**
	 * @param groupId the groupId to set
	 */
	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}

	/**
	 * @return the groupName
	 */
	public String getGroupName() {
		return groupName;
	}

	/**
	 * @param groupName the groupName to set
	 */
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	/**
	 * @return the createdOn
	 */
	public Date getCreatedOn() {
		return createdOn;
	}

	/**
	 * @param createdOn the createdOn to set
	 */
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	/**
	 * @return the modifiedOn
	 */
	public Date getModifiedOn() {
		return modifiedOn;
	}

	/**
	 * @param modifiedOn the modifiedOn to set
	 */
	public void setModifiedOn(Date modifiedOn) {
		this.modifiedOn = modifiedOn;
	}

	/**
	 * @return the createdBy
	 */
	public String getCreatedBy() {
		return createdBy;
	}

	/**
	 * @param createdBy the createdBy to set
	 */
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 * @return the modifiedBy
	 */
	public String getModifiedBy() {
		return modifiedBy;
	}

	/**
	 * @param modifiedBy the modifiedBy to set
	 */
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	/**
	 * @return the eventList
	 */
	public List<Event> getEventList() {
		return eventList;
	}

	/**
	 * @param eventList the eventList to set
	 */
	public void setEventList(List<Event> eventList) {
		this.eventList = eventList;
	}
	
	
	
	
	
}
