package com.trip.vue.plan.model;

import java.sql.Date;
import java.sql.Timestamp;

import lombok.Data;

@Data
public class PlanDto {
	private int plan_id;
	private String title;
	private String userId;
	private String overview;
	private Date start_date;
	private Date end_date;
}
