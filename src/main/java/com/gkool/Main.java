package com.gkool;

import javax.persistence.EntityManager;

import com.gkool.data.Centre;

public class Main {

	public static void main(String[] args) {

		Centre centre = new Centre();

		centre.setName("Bajaj Nagar");
		centre.setCity("Jaipur");
		

		EntityManager em = PersistenceManager.INSTANCE.getEntityManager();

		em.getTransaction()

		.begin();

		em.persist(centre);

		em.getTransaction()

		.commit();

		em.close();

		PersistenceManager.INSTANCE.close();

	}

}
