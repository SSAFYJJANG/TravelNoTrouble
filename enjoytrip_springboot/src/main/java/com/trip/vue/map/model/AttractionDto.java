package com.trip.vue.map.model;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class AttractionDto {
	private int content_id;
	private int content_type_id;
	private String title;
	private String addr1;
	private String addr2;
	private String zipcode;
	private String tel;
	private String first_image;
	private String first_image2;
	private int readcount;
	private int sido_code;
	private int gugun_code;
	private BigDecimal longitude ;
	private BigDecimal latitude ;
	private String mlevel;
	private String homepage;
	private String overview;
	private String telname;
	private String cat1;
	private String cat2;
	private String cat3;
	private String created_time;
	private String modified_time;
	private String booktour;
}
