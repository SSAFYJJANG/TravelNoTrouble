package com.trip.vue.plan.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.plan.model.PlanDaysDto;
import com.trip.vue.plan.model.PlanDetailDto;
import com.trip.vue.plan.model.PlanDto;
import com.trip.vue.plan.model.dao.PlanDao;
import com.trip.vue.plan.model.dao.PlanDetailDao;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
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
    public int insertPlan(Map<String, Object> planData) throws Exception {
        PlanDto planDto = new PlanDto();
        planDto.setTitle((String) planData.get("title"));
        planDto.setStart_date((String) planData.get("start_date"));
        planDto.setEnd_date((String) planData.get("end_date"));
        planDto.setUserId((String) planData.get("userId"));
        planDto.setOverview((String) planData.get("overview"));
        planDao.insertPlan(planDto);

        Map<String, List<Map<String, Object>>> dayData = (Map<String, List<Map<String, Object>>>) planData.get("day");
        for (String dayKey : dayData.keySet()) {
            try {
                PlanDaysDto planDaysDto = new PlanDaysDto();
                planDaysDto.setPlan_id(planDto.getPlan_id());
                planDao.insertPlanDays(planDaysDto);
                int planDaysId = planDaysDto.getPlan_days_id();

                List<Map<String, Object>> details = dayData.get(dayKey);
                for (Map<String, Object> detail : details) {
                    PlanDetailDto planDetailDto = new PlanDetailDto();
                    planDetailDto.setPlan_days_id(planDaysId);
                    planDetailDto.setContent_id((Integer) detail.get("content_id"));
                    planDetailDto.setOverview((String) detail.get("overview"));
                    planDetailDao.insertPlanDetail(planDetailDto);
                }
            } catch (Exception e) {
                e.printStackTrace();
                throw new RuntimeException("Failed to insert plan days or details", e);
            }
        }
        return 0;
    }


	@Transactional
	@Override
	public int deletePlan(Map<String, Object> map) throws Exception {
		planDao.deleteAllPlanDays(String.valueOf(map.get("userId")));
		planDetailDao.deleteAllPlanDetail(String.valueOf(map.get("userId")));
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
