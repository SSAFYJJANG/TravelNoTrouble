package com.trip.vue.user.model.service;

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
	public UserDto getLoginUser(Map<String, String> user) {
		return userDao.getLoginUser(user);
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

}
