/**
 * 
 */
package com.events.web.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.events.api.service.Constants.EventType;

/**
 * @author jadhavk
 *
 */

public class Event {
	Integer eventId;
	
	String eventName;
	
	String eventPlace;
	
	Timestamp timeStamp;
	
	Double contactNumber;
	
	String emailId;
	
	Integer maxGroupAllowed;
	
	Integer groupsEnrolled;
	
	Integer maxPeoplePerGroup;
	
	Integer minPeoplePerGroup;
	
	Integer amountPerPerson;
	
	Boolean isActive;
	
	String  createdBy;
	
	Date createdOn;
	
	String  modifiedBy;
	
	Date modifiedOn;
	
	String  eventType;
	
	Organization org;
	
	String pictureUrl;
	
	String twitterUrl;
	
	String facebookUrl;
	
	String googlePlusUrl;
	
	List<Group> groupList = new ArrayList<Group>();
	
	

	/**
	 * @return the groupList
	 */
	public List<Group> getGroupList() {
		return groupList;
	}

	/**
	 * @param groupList the groupList to set
	 */
	public void setGroupList(List<Group> groupList) {
		this.groupList = groupList;
	}

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
	public String getEventType() {
		return eventType;
	}

	/**
	 * @param eventType the eventType to set
	 */
	public void setEventType(String eventType) {
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

	/**
	 * @return the pictureUrl
	 */
	public String getPictureUrl() {
		return pictureUrl;
	}

	/**
	 * @param pictureUrl the pictureUrl to set
	 */
	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	/**
	 * @return the twitterUrl
	 */
	public String getTwitterUrl() {
		return twitterUrl;
	}

	/**
	 * @param twitterUrl the twitterUrl to set
	 */
	public void setTwitterUrl(String twitterUrl) {
		this.twitterUrl = twitterUrl;
	}

	/**
	 * @return the facebookUrl
	 */
	public String getFacebookUrl() {
		return facebookUrl;
	}

	/**
	 * @param facebookUrl the facebookUrl to set
	 */
	public void setFacebookUrl(String facebookUrl) {
		this.facebookUrl = facebookUrl;
	}

	/**
	 * @return the googlePlusUrl
	 */
	public String getGooglePlusUrl() {
		return googlePlusUrl;
	}

	/**
	 * @param googlePlusUrl the googlePlusUrl to set
	 */
	public void setGooglePlusUrl(String googlePlusUrl) {
		this.googlePlusUrl = googlePlusUrl;
	}
	
//
	

}
