package com.trip.vue.plan.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

import com.trip.vue.plan.model.PlanDaysDto;
import com.trip.vue.plan.model.PlanDto;
@Mapper
public interface PlanDao {
	//list 가져오기
	public List<PlanDto> listPlan(String userId) throws Exception;
	//일정 쓰기
	@Options(useGeneratedKeys = true, keyProperty = "plan_id", keyColumn = "plan_id")
	public int insertPlan(PlanDto ob) throws Exception;
	// 일정 날짜 기록
	@Options(useGeneratedKeys = true, keyProperty = "plan_days_id", keyColumn = "plan_days_id")
    int insertPlanDays(PlanDaysDto planDays);
	//일정 삭제
	public int deletePlan(Map<String, Object> map) throws Exception;
	//일정 메모 수정
	public int modifyPlan(PlanDto ob) throws Exception;
	// user 탈퇴시 동작
	// 일정 전체 삭제
	public int deleteAllPlan(String userId) throws Exception;
	// 일정 날짜 삭제
	public int deleteAllPlanDays(String userId) throws Exception;
}
