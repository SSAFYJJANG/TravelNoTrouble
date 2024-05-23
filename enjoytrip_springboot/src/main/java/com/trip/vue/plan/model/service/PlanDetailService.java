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
	public int deleteAllPlanDetail(String userId) throws Exception;
	// 해당 여행 아이디의 전체 세부일정 삭제
	public int deletePlanDetails(int plan_id) throws Exception;
	// 해당 여행의 일수 삭제
	public int deletePlanDays(int plan_id) throws Exception;
	// 메모 수정
	public int modifyPlanDetailOverview(PlanDetailDto ob) throws Exception;
}
