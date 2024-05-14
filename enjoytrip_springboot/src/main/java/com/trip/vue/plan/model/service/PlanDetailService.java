package com.trip.vue.plan.model.service;

import java.util.List;

import com.trip.vue.plan.model.PlanDetailDto;

public interface PlanDetailService {
	// list 가져오기
	public List<PlanDetailDto> listPlanDetail(int plan_id) throws Exception;
	// 세부일정 쓰기
	public int insertPlanDetail(PlanDetailDto ob) throws Exception;
	// 세부일정 삭제
	public int deletePlanDetail(int plan_detail_id) throws Exception;
	// 전체 세부 일정 삭제
	public int deleteAllPlanDetail(int plan_id) throws Exception;
}
