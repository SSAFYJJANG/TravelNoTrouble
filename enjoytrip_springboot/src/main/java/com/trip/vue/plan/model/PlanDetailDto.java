package com.trip.vue.plan.model;

import lombok.Data;

@Data
public class PlanDetailDto {
	private int plan_detail_id;
	private int plan_days_id;
	private int content_id;
	private String overview;
}
