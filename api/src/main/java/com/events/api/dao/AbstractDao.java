package com.events.api.dao;

public interface AbstractDao<T> {
	public T getElementById(String id);
	public void save(T element);
}
