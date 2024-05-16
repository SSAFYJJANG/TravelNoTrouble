package com.trip.vue.user.model;

import lombok.Data;

@Data
public class UserDto {
	private String userId;
	private String password;
	private String username;
	private String email;
	private String image;
	private int sido_code;
	private int gugun_code;
	private int admin;
	private String refresh_token;
}
