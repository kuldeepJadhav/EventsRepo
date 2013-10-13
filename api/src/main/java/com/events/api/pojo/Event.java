package com.events.api.pojo;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.Entity;
import org.hibernate.annotations.Table;






@Entity
@Table(appliesTo = "event")
public class Event {
	
	
	@Id
    @Column(name="e_id")
    @GeneratedValue
	private String eventId;
	
	@Column(name="e_name")
	private String eventName;
	
	@Column(name="e_email_id")
	private String eventMailId;
	
	@Column(name="e_time")
	private String eventTime;
	
	@Column(name="e_emount_per_person")
	private int amountPerPerson;
	
	@Column(name="e_gorups_enrolled")
	private int groupsEnrolled;
	
	@Column(name="e_max_person_per_group")
	private int maxNoOfPeopleInAGroup;
	
	@Column(name="e_min_person_per_group")
	private int minNoOfPeopleInAGroup;
	
//TODO	/*@Column(name="FIRSTNAME")
	//private String eventTemplateUrl;
//TODO@Column(name="FIRSTNAME")
	//private String twitterUrl;
//TODO@Column(name="FIRSTNAME")
	//private String facebookUrl;
	@Column(name="e_createdOn")
	private Date createdDate;
	
	@Column(name="e_createdBy")
	private String createdBy;
	
	@Column(name="e_modifiedOn")
	private Date modifiedDate;
	
	@Column(name="e_modifiedBy")
	private String modifiedBy;
	/**
	 * @return the eventName
	 */
	public String getEventName() {
		return eventName;
	}
	/**
	 * @param eventName the eventName to set
	 */
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	/**
	 * @return the eventId
	 */
	public String getEventId() {
		return eventId;
	}
	/**
	 * @param eventId the eventId to set
	 */
	public void setEventId(String eventId) {
		this.eventId = eventId;
	}
	/**
	 * @return the eventMailId
	 */
	public String getEventMailId() {
		return eventMailId;
	}
	/**
	 * @param eventMailId the eventMailId to set
	 */
	public void setEventMailId(String eventMailId) {
		this.eventMailId = eventMailId;
	}
	/**
	 * @return the eventTime
	 */
	public String getEventTime() {
		return eventTime;
	}
	/**
	 * @param eventTime the eventTime to set
	 */
	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}
	/**
	 * @return the amountPerPerson
	 */
	public int getAmountPerPerson() {
		return amountPerPerson;
	}
	/**
	 * @param amountPerPerson the amountPerPerson to set
	 */
	public void setAmountPerPerson(int amountPerPerson) {
		this.amountPerPerson = amountPerPerson;
	}
	/**
	 * @return the groupsEnrolled
	 */
	public int getGroupsEnrolled() {
		return groupsEnrolled;
	}
	/**
	 * @param groupsEnrolled the groupsEnrolled to set
	 */
	public void setGroupsEnrolled(int groupsEnrolled) {
		this.groupsEnrolled = groupsEnrolled;
	}
	/**
	 * @return the maxNoOfPeopleInAGroup
	 */
	public int getMaxNoOfPeopleInAGroup() {
		return maxNoOfPeopleInAGroup;
	}
	/**
	 * @param maxNoOfPeopleInAGroup the maxNoOfPeopleInAGroup to set
	 */
	public void setMaxNoOfPeopleInAGroup(int maxNoOfPeopleInAGroup) {
		this.maxNoOfPeopleInAGroup = maxNoOfPeopleInAGroup;
	}
	/**
	 * @return the minNoOfPeopleInAGroup
	 */
	public int getMinNoOfPeopleInAGroup() {
		return minNoOfPeopleInAGroup;
	}
	/**
	 * @param minNoOfPeopleInAGroup the minNoOfPeopleInAGroup to set
	 */
	public void setMinNoOfPeopleInAGroup(int minNoOfPeopleInAGroup) {
		this.minNoOfPeopleInAGroup = minNoOfPeopleInAGroup;
	}
	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate;
	}
	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
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
	 * @return the modifiedDate
	 */
	public Date getModifiedDate() {
		return modifiedDate;
	}
	/**
	 * @param modifiedDate the modifiedDate to set
	 */
	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
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
	
	
	

}
