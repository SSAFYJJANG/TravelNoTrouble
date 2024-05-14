package com.trip.vue.plan.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.plan.model.PlanDto;
import com.trip.vue.plan.model.dao.PlanDao;

@Service
public class PlanServiceImpl implements PlanService {
	@Autowired
	private PlanDao planDao;

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
	public int deletePlan(int plan_id) throws Exception {
		return planDao.deletePlan(plan_id);
	}

	@Transactional
	@Override
	public int modifyPlan(PlanDto ob) throws Exception {
		return planDao.modifyPlan(ob);
	}
	
	@Transactional
	@Override
	public int deleteAllPlan(String userId) throws Exception {
		return planDao.deleteAllPlan(userId);
	}

}
