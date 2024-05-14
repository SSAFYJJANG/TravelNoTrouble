package com.trip.vue.plan.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.vue.plan.model.PlanDetailDto;
import com.trip.vue.plan.model.dao.PlanDetailDao;

@Service
public class PlanDetailServiceImpl implements PlanDetailService{

	@Autowired
	private PlanDetailDao planDetailDao;
	
	@Override
	public List<PlanDetailDto> listPlanDetail(int plan_id) throws Exception {
		return planDetailDao.listPlanDetail(plan_id);
	}

	@Override
	public int insertPlanDetail(PlanDetailDto ob) throws Exception {
		return planDetailDao.insertPlanDetail(ob);
	}

	@Override
	public int deletePlanDetail(int plan_detail_id) throws Exception {
		return planDetailDao.deletePlanDetail(plan_detail_id);
	}

}
