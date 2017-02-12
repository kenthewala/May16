/**
 * 
 */
package com.gkool.service;

import com.gkool.data.Centre;

/**
 * @author anoop
 *
 */
public interface CentreService extends BaseService {

	public abstract Centre create(Centre t);
	public abstract void delete(Integer id);
	public abstract Centre update(Centre t);
	public abstract Centre get(Integer id);
}
