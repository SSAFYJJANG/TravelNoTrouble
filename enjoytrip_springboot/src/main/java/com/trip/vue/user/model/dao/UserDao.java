package com.trip.vue.user.model.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.trip.vue.user.model.UserDto;

@Mapper
public interface UserDao {
	//로그인
	public UserDto login(UserDto userDto);
	// 유저 refresh token DB 저장
	void saveRefreshToken(Map<String, String> map) throws Exception;
	// 유저 로그아웃 - refresh token 삭제
	void deleteRefreshToken(Map<String, String> map) throws Exception;
	// 유저 refresh token 재발급
	Object getRefreshToken(String userId) throws Exception;
	//세부정보 가져오기
	public UserDto getUserInfoById(String id);

	//회원가입 - 아이디 중복체크
	public int registUser(UserDto userinfo);

	//수정
	public int updateUserInfo(UserDto userinfo);
	//탈퇴
	public int deleteUserInfo(String userId);
	
	//유저 수 가져오기 - 메인화면
	public int getTotalUserCount() throws Exception;
}
