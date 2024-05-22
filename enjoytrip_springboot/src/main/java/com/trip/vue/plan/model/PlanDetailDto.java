package com.trip.vue.plan.model;

import lombok.Data;

@Data
public class PlanDetailDto {
	private int plan_detail_id;
	private int plan_days_id;
	private int plan_id;
	private int content_id;
	private String overview;
	private String content_name;
	private String title;
	private String addr1;
	private String addr2;
	private String first_image;
	private String first_image2;
}
