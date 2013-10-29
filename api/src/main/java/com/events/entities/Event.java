/**
 * 
 */
package com.events.entities;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author jadhavk
 *
 */

@Entity
@Table(name ="em_events")
public class Event {
	
	public static enum EventType{
		DRAMA,
		TECHNICAL,
		CORPORATE
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="e_id")
	Integer eventId;
	
	@Column(name="e_name")
	String eventName;
	
	@Column(name="e_place")
	String eventPlace;
	
	@Column(name="e_time")
	Timestamp timeStamp;
	
	@Column(name="e_contact_no")
	Double contactNumber;
	
	@Column(name="e_email_id")
	String emailId;
	
	@Column(name="e_max_groups_allowed")
	Integer maxGroupAllowed;
	
	@Column(name="e_groups_enrolled")
	Integer groupsEnrolled;
	
	@Column(name="e_max_people_per_group")
	Integer maxPeoplePerGroup;
	
	@Column(name="e_min_people_per_group")
	Integer minPeoplePerGroup;
	
	@Column(name="e_amount_per_person")
	Integer amountPerPerson;
	
	@Column(name="e_is_active")
	Boolean isActive;
	
	@Column(name="e_createdBy")
	String  createdBy;
	
	@Column(name="e_createdOn")
	Date createdOn;
	
	@Column(name="e_modifiedBy")
	String  modifiedBy;
	
	@Column(name="e_modifiedOn")
	Date modifiedOn;
	
	@Column(name="e_type")
	 @Enumerated(EnumType.STRING)
	EventType eventType;
	
	@ManyToOne
	@JoinColumn(name="org_id")
	Organization org;

	/**
	 * @return the eventId
	 */
	public Integer getEventId() {
		return eventId;
	}

	/**
	 * @param eventId the eventId to set
	 */
	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}

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
	 * @return the eventPlace
	 */
	public String getEventPlace() {
		return eventPlace;
	}

	/**
	 * @param eventPlace the eventPlace to set
	 */
	public void setEventPlace(String eventPlace) {
		this.eventPlace = eventPlace;
	}

	/**
	 * @return the timeStamp
	 */
	public Timestamp getTimeStamp() {
		return timeStamp;
	}

	/**
	 * @param timeStamp the timeStamp to set
	 */
	public void setTimeStamp(Timestamp timeStamp) {
		this.timeStamp = timeStamp;
	}

	
	/**
	 * @return the contactNumber
	 */
	public Double getContactNumber() {
		return contactNumber;
	}

	/**
	 * @param contactNumber the contactNumber to set
	 */
	public void setContactNumber(Double contactNumber) {
		this.contactNumber = contactNumber;
	}

	/**
	 * @return the emailId
	 */
	public String getEmailId() {
		return emailId;
	}

	/**
	 * @param emailId the emailId to set
	 */
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	/**
	 * @return the maxGroupAllowed
	 */
	public Integer getMaxGroupAllowed() {
		return maxGroupAllowed;
	}

	/**
	 * @param maxGroupAllowed the maxGroupAllowed to set
	 */
	public void setMaxGroupAllowed(Integer maxGroupAllowed) {
		this.maxGroupAllowed = maxGroupAllowed;
	}

	/**
	 * @return the groupsEnrolled
	 */
	public Integer getGroupsEnrolled() {
		return groupsEnrolled;
	}

	/**
	 * @param groupsEnrolled the groupsEnrolled to set
	 */
	public void setGroupsEnrolled(Integer groupsEnrolled) {
		this.groupsEnrolled = groupsEnrolled;
	}

	/**
	 * @return the maxPeoplePerGroup
	 */
	public Integer getMaxPeoplePerGroup() {
		return maxPeoplePerGroup;
	}

	/**
	 * @param maxPeoplePerGroup the maxPeoplePerGroup to set
	 */
	public void setMaxPeoplePerGroup(Integer maxPeoplePerGroup) {
		this.maxPeoplePerGroup = maxPeoplePerGroup;
	}

	/**
	 * @return the minPeoplePerGroup
	 */
	public Integer getMinPeoplePerGroup() {
		return minPeoplePerGroup;
	}

	/**
	 * @param minPeoplePerGroup the minPeoplePerGroup to set
	 */
	public void setMinPeoplePerGroup(Integer minPeoplePerGroup) {
		this.minPeoplePerGroup = minPeoplePerGroup;
	}

	/**
	 * @return the amountPerPerson
	 */
	public Integer getAmountPerPerson() {
		return amountPerPerson;
	}

	/**
	 * @param amountPerPerson the amountPerPerson to set
	 */
	public void setAmountPerPerson(Integer amountPerPerson) {
		this.amountPerPerson = amountPerPerson;
	}

	/**
	 * @return the isActive
	 */
	public Boolean getIsActive() {
		return isActive;
	}

	/**
	 * @param isActive the isActive to set
	 */
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
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
	 * @return the eventType
	 */
	public EventType getEventType() {
		return eventType;
	}

	/**
	 * @param eventType the eventType to set
	 */
	public void setEventType(EventType eventType) {
		this.eventType = eventType;
	}

	/**
	 * @return the org
	 */
	public Organization getOrg() {
		return org;
	}

	/**
	 * @param org the org to set
	 */
	public void setOrg(Organization org) {
		this.org = org;
	}


	
	
	

}
