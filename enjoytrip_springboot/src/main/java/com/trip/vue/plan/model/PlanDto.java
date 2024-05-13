package com.trip.vue.plan.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class PlanDto {
	private int plan_id;
	private String title;
	private String userId;
	private String overview;
	private Timestamp start_date;
	private Timestamp end_date;
}