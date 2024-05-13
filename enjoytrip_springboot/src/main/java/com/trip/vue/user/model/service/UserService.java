package com.trip.vue.user.model.service;

import java.util.Map;

import com.trip.vue.user.model.UserDto;

public interface UserService {
	//로그인
	public UserDto getLoginUser(Map<String, String> user);
	//회원가입
	public int registUser(UserDto userinfo);
	//수정
	public int updateUserInfo(UserDto userinfo);
	//삭제
	public int deleteUserInfo(String userId);
	//세부정보 가져오기
	public UserDto getUserInfoById(String userId);
	//유저 수 가져오기 - 메인화면
	public int getTotalUserCount() throws Exception;
}
