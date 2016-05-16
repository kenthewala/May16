package com.gkool;

import javax.persistence.EntityManager;

import javax.persistence.EntityManagerFactory;

import javax.persistence.Persistence;

public enum PersistenceManager {

  INSTANCE;

  private EntityManagerFactory emFactory;

  private PersistenceManager() {

    // "gk1" was the value of the name attribute of the

    // persistence-unit element.

    emFactory = Persistence.createEntityManagerFactory("gk1");

  }

  public EntityManager getEntityManager() {

    return emFactory.createEntityManager();

  }

  public void close() {

    emFactory.close();

  }

}