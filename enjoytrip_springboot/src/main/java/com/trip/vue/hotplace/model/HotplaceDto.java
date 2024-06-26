package com.trip.vue.hotplace.model;

import lombok.Data;

@Data
public class HotplaceDto {
	private int hotplace_id;
    private String title;
    private String userId;
    private String username;
    private String overview;
    private String image;
    private int sido_code;
    private int gugun_code;
    private String regist_time;
    private String modified_time;
    private int like;
}
