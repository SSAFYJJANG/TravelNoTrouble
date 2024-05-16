package com.trip.vue.user.model.service;

import java.util.Map;

import com.trip.vue.user.model.UserDto;

public interface UserService {
	//로그인
	public UserDto login(UserDto userDto);
	// 유저 refresh token DB 저장
	void saveRefreshToken(String userId, String refreshToken) throws Exception;
	// 유저 로그아웃 - refresh token 삭제
	void deleteRefreshToken(String userId) throws Exception;
	// 유저 refresh token 재발급
	Object getRefreshToken(String userId) throws Exception;
	//회원가입 - 아이디 중복 체크
	public int registUser(UserDto userinfo);
	//수정
	public int updateUserInfo(UserDto userinfo);
	//탈퇴
	public int deleteUserInfo(String userId);
	//세부정보 가져오기
	public UserDto getUserInfoById(String userId);
	//유저 수 가져오기 - 메인화면
	public int getTotalUserCount() throws Exception;
}
