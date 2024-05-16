package com.trip.vue.plan.model.service;

import java.util.List;

import com.trip.vue.plan.model.PlanDto;

public interface PlanService {
	//list 가져오기
	public List<PlanDto> listPlan(String userId) throws Exception;
	//일정 쓰기
	public int insertPlan(PlanDto ob) throws Exception;
	//일정 삭제
	public int deletePlan(int plan_id) throws Exception;
	//일정 메모 수정
	public int modifyPlan(PlanDto ob) throws Exception;
	// 일정 전체 삭제
	public int deleteAllPlan(String userId) throws Exception;
	// 일정 날짜 삭제
	public int deleteAllPlanDays(String userId) throws Exception;
}
