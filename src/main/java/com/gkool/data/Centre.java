package com.gkool.data;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Centre
 *
 */
@Entity
public class Centre implements Serializable {
	
	@Id
	private int id;
	private String name;
	private String city;

	
	private static final long serialVersionUID = 1L;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	public Centre() {
		super();
	}
	
	/**
	 * @param id
	 * @param name
	 * @param city
	 */
	public Centre(String name, String city) {
		super();
		this.name = name;
		this.city = city;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
   
}
