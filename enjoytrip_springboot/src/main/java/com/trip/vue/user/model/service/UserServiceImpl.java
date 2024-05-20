package com.trip.vue.user.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.user.model.UserDto;
import com.trip.vue.user.model.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public UserDto login(UserDto userDto) {
		return userDao.login(userDto);
	}
	
	@Override
	public void saveRefreshToken(String userId, String refreshToken) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("token", refreshToken);
		
		userDao.saveRefreshToken(map);
	}
	
	@Override
	public void deleteRefreshToken(String userId) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("token", null);
		userDao.deleteRefreshToken(map);
	}
	
	@Override
	public Object getRefreshToken(String userId) throws Exception {
		return userDao.getRefreshToken(userId);
	}

	@Transactional
	@Override
	public int registUser(UserDto userinfo) {
		return userDao.registUser(userinfo);
	}

	@Transactional
	@Override
	public int updateUserInfo(UserDto userinfo) {
		return userDao.updateUserInfo(userinfo);
	}

	@Transactional
	@Override
	public int deleteUserInfo(String userId) {
		return userDao.deleteUserInfo(userId);
	}

	@Override
	public UserDto getUserInfoById(String id) {
		return userDao.getUserInfoById(id);
	}

	@Override
	public int getTotalUserCount() throws Exception {
		return userDao.getTotalUserCount();
	}

	@Override
	public int findUserPassword(String userId) {
		return userDao.findUserPassword(userId);
	}

}
