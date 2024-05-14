package com.trip.vue.map.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.vue.hotplace.model.dao.HotplaceDao;
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
		return mapDao.getGugunList();
	}

	@Override
	public List<AttractionDto> getAttractionList(int sido_code, int gugun_code, int content_type_id) {
		return mapDao.getAttractionList(sido_code, gugun_code, content_type_id);
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

}
