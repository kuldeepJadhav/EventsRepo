/**
 * 
 */
package com.events.web.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.events.api.service.Constants.OrganizationType;

/**
 * @author jadhavk
 *
 */
public class Organization {
	
	private Integer organizationId;
	
	private String organizationName;
	
	private String organizationType;
	
	private String mapUrl;
	
	private String fbUrl;
	
	private String twitterUrl;
	
	private String org_googlePlusUrl;
	
	List<Event> events;

	/**
	 * @return the organizationId
	 */
	public Integer getOrganizationId() {
		return organizationId;
	}

	/**
	 * @param organizationId the organizationId to set
	 */
	public void setOrganizationId(Integer organizationId) {
		this.organizationId = organizationId;
	}

	/**
	 * @return the organizationName
	 */
	public String getOrganizationName() {
		return organizationName;
	}

	/**
	 * @param organizationName the organizationName to set
	 */
	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	/**
	 * @return the organizationType
	 */
	public String getOrganizationType() {
		return organizationType;
	}

	/**
	 * @param organizationType the organizationType to set
	 */
	public void setOrganizationType(String organizationType) {
		this.organizationType = organizationType;
	}

	/**
	 * @return the mapUrl
	 */
	public String getMapUrl() {
		return mapUrl;
	}

	/**
	 * @param mapUrl the mapUrl to set
	 */
	public void setMapUrl(String mapUrl) {
		this.mapUrl = mapUrl;
	}

	/**
	 * @return the fbUrl
	 */
	public String getFbUrl() {
		return fbUrl;
	}

	/**
	 * @param fbUrl the fbUrl to set
	 */
	public void setFbUrl(String fbUrl) {
		this.fbUrl = fbUrl;
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
	 * @return the org_googlePlusUrl
	 */
	public String getOrg_googlePlusUrl() {
		return org_googlePlusUrl;
	}

	/**
	 * @param org_googlePlusUrl the org_googlePlusUrl to set
	 */
	public void setOrg_googlePlusUrl(String org_googlePlusUrl) {
		this.org_googlePlusUrl = org_googlePlusUrl;
	}

	/**
	 * @return the events
	 */
	public List<Event> getEvents() {
		return events;
	}

	/**
	 * @param events the events to set
	 */
	public void setEvents(List<Event> events) {
		this.events = events;
	}
	

}
