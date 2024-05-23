package com.trip.vue.plan.controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.plan.model.PlanDetailDto;
import com.trip.vue.plan.model.PlanDto;
import com.trip.vue.plan.model.service.PlanDetailService;
import com.trip.vue.plan.model.service.PlanService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/plan")
@Slf4j
public class PlanController {
	@Autowired
	private PlanService planService;
	@Autowired
	private PlanDetailService planDetailService;
	
	//plan
	//get list 가져오기 '/' 
	@GetMapping("")
	public ResponseEntity<?> listPlan(@RequestParam("userId") String userId) throws Exception{
		log.info("listPlan access = {}", userId);
		try {
			return new ResponseEntity<List<PlanDto>>(planService.listPlan(userId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//post 일정 쓰기 '/'
	@PostMapping("")
	public ResponseEntity<?> insertPlan(@RequestBody PlanDto ob) throws Exception{
		log.info("insertPlan access = {}", ob);
		try {
			return new ResponseEntity<Integer>(planService.insertPlan(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete 일정 삭제 '/'
	@DeleteMapping("")
	// @RequestParam Map<String, Object> map = key : userId, plan_id
	public ResponseEntity<?> deletePlan(@RequestParam Map<String, Object> map) throws Exception{
		log.info("deletePlan access = {}", map);
		try {
			return new ResponseEntity<Integer>(planService.deletePlan(map), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 일정 메모 수정 '/'
	@PutMapping("")
	public ResponseEntity<?> modifyPlan(@RequestBody PlanDto ob) throws Exception{
		log.info("modifyPlan access = {}", ob);
		try {
			return new ResponseEntity<Integer>(planService.modifyPlan(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//planDetail
	// get list 가져오기 '/{plan_id}'
	@GetMapping("/{plan_id}")
	public ResponseEntity<?> listPlanDetail(@PathVariable("plan_id") int plan_id) throws Exception{
		try {
			return new ResponseEntity<List<PlanDetailDto>>(planDetailService.listPlanDetail(plan_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// post 세부일정 쓰기 '/{plan_id}'
	@PostMapping("/{plan_id}")
	public ResponseEntity<?> insertPlanDetail(@RequestBody PlanDetailDto ob) throws Exception{
		try {
			return new ResponseEntity<Integer>(planDetailService.insertPlanDetail(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// delete 세부일정 삭제
	@DeleteMapping("/detail")
	public ResponseEntity<?> deletePlanDetail(@RequestParam("plan_detail_id") int plan_detail_id) throws Exception{
		try {
			return new ResponseEntity<Integer>(planDetailService.deletePlanDetail(plan_detail_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// 세부 일정 메모 수정
	@PutMapping("/detail")
	public ResponseEntity<?> modifyPlanDetailOverview(@RequestBody PlanDetailDto ob) throws Exception{
		try {
			return new ResponseEntity<Integer>(planDetailService.modifyPlanDetailOverview(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
