package com.trip.vue.plan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.plan.model.service.PlanDetailService;
import com.trip.vue.plan.model.service.PlanService;

@RestController
@RequestMapping("/plan")
public class PlanController {
	@Autowired
	private PlanService planService;
	@Autowired
	private PlanDetailService planDetailService;
	
	//plan
	//get list 가져오기 '/' 
	//post 일정 쓰기 '/'
	//delete 일정 삭제 '/'
	//put 일정 메모 수정 '/'
	
	//planDetail
	// get list 가져오기 '/{plan_id}'
	// post 세부일정 쓰기 '/{plan_id}'
	// delete 세부일정 삭제 '/{plan_id}'
}
