package com.trip.vue.plan.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.trip.vue.plan.model.PlanDetailDto;
import com.trip.vue.plan.model.PlanDto;

@Mapper
public interface PlanDetailDao {
	// list 가져오기
	public List<PlanDetailDto> listPlanDetail(int plan_id) throws Exception;
	// 세부일정 쓰기
	public int insertPlanDetail(PlanDetailDto ob) throws Exception;
	// 세부일정 삭제
	public int deletePlanDetail(int plan_detail_id) throws Exception;
	// 전체 세부 일정 삭제
	public int deleteAllPlanDetail(String userId) throws Exception;
	// 메모 수정
	public int modifyPlanDetailOverview(PlanDetailDto ob) throws Exception;
}
