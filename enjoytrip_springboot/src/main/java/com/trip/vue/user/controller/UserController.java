package com.trip.vue.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.user.model.UserDto;
import com.trip.vue.user.model.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	//post 로그인 "/login"
	//post 로그아웃 "/logout"
	
	//post 회원가입 "/"
	@PostMapping("/")
	public ResponseEntity<?> registUser(@RequestBody UserDto userinfo) throws Exception{
		try {
			int result = service.registUser(userinfo);
			if(result < 1) throw new Exception();
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 수정 "/"
	@PutMapping("/")
	public ResponseEntity<?> updateUserInfo(@RequestBody UserDto userinfo) throws Exception{
		try {
			int result = service.updateUserInfo(userinfo);
			if(result < 1) throw new Exception();
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete 삭제 "/"
	@DeleteMapping("/")
	public ResponseEntity<?> deleteUserInfo(@RequestBody String userId) throws Exception{
		try {
			
			int result = service.deleteUserInfo(userId);
			if(result < 1) throw new Exception();
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//get 세부정보 가져오기 - "/{userid}"
	@GetMapping("/{userid}")
	public ResponseEntity<?> getUserInfoById(@PathVariable("userid") String userId) throws Exception{
		try {
			return new ResponseEntity<UserDto>(service.getUserInfoById(userId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//get 유저 수 가져오기 - 메인화면 "/cnt"
	@GetMapping("/cnt")
	public ResponseEntity<?> getTotalUserCount() throws Exception{
		try {
			return new ResponseEntity<Integer>(service.getTotalUserCount(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
