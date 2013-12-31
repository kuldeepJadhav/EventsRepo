package com.web.response;

import java.util.ArrayList;
import java.util.List;

public class EventDetailsJson {
	
	private String time;
	private Integer amountPerPerson;
	private Integer totalGroupsAllowed;
	private Integer groupsEnrolled;
	private Integer maxNoOfPeopleInAGroup;
	private Integer minNoOfPeopleInAGroup;
	private String pictureUrl;
	private String facebookUrl;
	private String twitterUrl;
	private List<ContactInfoJson>contactInfo = new ArrayList<ContactInfoJson>();
	/**
	 * @return the time
	 */
	public String getTime() {
		return time;
	}
	/**
	 * @param time the time to set
	 */
	public void setTime(String time) {
		this.time = time;
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
	 * @return the totalGroupsAllowed
	 */
	public Integer getTotalGroupsAllowed() {
		return totalGroupsAllowed;
	}
	/**
	 * @param totalGroupsAllowed the totalGroupsAllowed to set
	 */
	public void setTotalGroupsAllowed(Integer totalGroupsAllowed) {
		this.totalGroupsAllowed = totalGroupsAllowed;
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
	 * @return the maxNoOfPeopleInAGroup
	 */
	public Integer getMaxNoOfPeopleInAGroup() {
		return maxNoOfPeopleInAGroup;
	}
	/**
	 * @param maxNoOfPeopleInAGroup the maxNoOfPeopleInAGroup to set
	 */
	public void setMaxNoOfPeopleInAGroup(Integer maxNoOfPeopleInAGroup) {
		this.maxNoOfPeopleInAGroup = maxNoOfPeopleInAGroup;
	}
	/**
	 * @return the minNoOfPeopleInAGroup
	 */
	public Integer getMinNoOfPeopleInAGroup() {
		return minNoOfPeopleInAGroup;
	}
	/**
	 * @param minNoOfPeopleInAGroup the minNoOfPeopleInAGroup to set
	 */
	public void setMinNoOfPeopleInAGroup(Integer minNoOfPeopleInAGroup) {
		this.minNoOfPeopleInAGroup = minNoOfPeopleInAGroup;
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
	 * @return the contactInfo
	 */
	public List<ContactInfoJson> getContactInfo() {
		return contactInfo;
	}
	/**
	 * @param contactInfo the contactInfo to set
	 */
	public void setContactInfo(List<ContactInfoJson> contactInfo) {
		this.contactInfo = contactInfo;
	}
	
	
	

}
