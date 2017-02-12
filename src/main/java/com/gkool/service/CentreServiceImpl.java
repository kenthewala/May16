package com.gkool.service;

import org.springframework.stereotype.Service;

import com.gkool.data.Centre;

@Service
public class CentreServiceImpl implements CentreService {

	@Override
	public Centre create(Centre t) {
		t.setId(1);
		return t;
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Centre update(Centre t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Centre get(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

}
