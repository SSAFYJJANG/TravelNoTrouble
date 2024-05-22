package com.trip.vue.map.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.vue.map.model.AttractionDto;
import com.trip.vue.map.model.GugunDto;
import com.trip.vue.map.model.SidoDto;
import com.trip.vue.map.model.dao.MapDao;

@Service
public class MapServiceImpl implements MapService{

	@Autowired
	private MapDao mapDao;
	
	@Override
	public List<SidoDto> getSidoList() {
		return mapDao.getSidoList();
	}
	
	@Override
	public Map<Integer, List<GugunDto>> getGugunList() {
		List<GugunDto> guguns = mapDao.getGugunList();
		Map<Integer, List<GugunDto>> map = new HashMap<>();
		for (int i=0; i<guguns.size(); i++) {
			GugunDto g = guguns.get(i);
			int sido_code = g.getSido_code();
			if (!map.containsKey(sido_code)) {
				map.put(sido_code, new ArrayList<>());
			}
			map.get(sido_code).add(g);
		}
		return map;
	}

	@Override
	public List<AttractionDto> getAttractionList(Map<String, Object> map) {
		return mapDao.getAttractionList(map);
	}

	@Override
	public AttractionDto viewAttraction(int content_id) throws Exception {
		return mapDao.viewAttraction(content_id);
	}

	@Override
	public int getTotalAttractionCount() throws Exception {
		return mapDao.getTotalAttractionCount();
	}

	@Override
	public AttractionDto getRecommendationAttraction() throws Exception {
		return mapDao.getRecommendationAttraction();
	}

	@Override
	public List<AttractionDto> getUserAttractionList(String userid) {
		return mapDao.getUserAttractionList(userid);
	}

	@Override
	public int insertAttraction(Map<String, Object> map) throws Exception {
		return mapDao.insertAttraction(map);
	}

	@Override
	public int deleteAttraction(Map<String, Object> map) throws Exception {
		return mapDao.deleteAttraction(map);
	}

	@Override
	public int deleteAllAttraction(String userid) throws Exception {
		return mapDao.deleteAllAttraction(userid);
	}

}
