package com.trip.vue.map.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.trip.vue.map.model.AttractionDto;
import com.trip.vue.map.model.GugunDto;
import com.trip.vue.map.model.SidoDto;

@Service
public class MapServieImpl implements MapServie{

	@Override
	public List<SidoDto> getSidoList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Integer, List<GugunDto>> getGugunList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<AttractionDto> getAttractionList(int sido_code, int gugun_code, int content_type_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AttractionDto viewAttraction(int content_id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int getTotalAttractionCount() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public AttractionDto getRecommendationAttraction() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
