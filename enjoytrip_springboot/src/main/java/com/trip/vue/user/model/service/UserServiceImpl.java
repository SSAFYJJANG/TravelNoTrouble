package com.trip.vue.user.model.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.trip.vue.user.model.UserDto;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public UserDto getLoginUser(Map<String, String> user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int registUser(UserDto userinfo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateUserInfo(UserDto userinfo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteUserInfo(String userId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public UserDto getUserInfoById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int getTotalUserCount() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

}
