package com.trip.vue.plan.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.plan.model.PlanDto;
import com.trip.vue.plan.model.dao.PlanDao;
import com.trip.vue.plan.model.dao.PlanDetailDao;

@Service
public class PlanServiceImpl implements PlanService {
	@Autowired
	private PlanDao planDao;
	@Autowired
	private PlanDetailDao planDetailDao;

	@Override
	public List<PlanDto> listPlan(String userId) throws Exception {
		return planDao.listPlan(userId);
	}

	@Transactional
	@Override
	public int insertPlan(PlanDto ob) throws Exception {
		return planDao.insertPlan(ob);
	}

	@Transactional
	@Override
	public int deletePlan(Map<String, Object> map) throws Exception {
		String userId = String.valueOf(map.get("userId"));
		int plan_id = Integer.valueOf((String) map.get("plan_id"));
//		planDetailDao.deleteAllPlanDetail(userId);
//		planDao.deleteAllPlanDays(String.valueOf(map.get("userId")));
		planDetailDao.deletePlanDetails(plan_id);
		planDetailDao.deletePlanDays(plan_id);
		return planDao.deletePlan(map);
	}

	@Transactional
	@Override
	public int modifyPlan(PlanDto ob) throws Exception {
		return planDao.modifyPlan(ob);
	}
	
	@Transactional
	@Override
	public int deleteAllPlan(String userId) throws Exception {
		planDao.deleteAllPlanDays(userId);
		planDetailDao.deleteAllPlanDetail(userId);
		return planDao.deleteAllPlan(userId);
	}

	@Override
	public int deleteAllPlanDays(String userId) throws Exception {
		return planDao.deleteAllPlanDays(userId);
	}

}
