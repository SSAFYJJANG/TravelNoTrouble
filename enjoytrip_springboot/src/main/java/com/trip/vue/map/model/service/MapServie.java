package com.trip.vue.map.model.service;

import java.util.List;
import java.util.Map;

import com.trip.vue.map.model.AttractionDto;
import com.trip.vue.map.model.GugunDto;
import com.trip.vue.map.model.SidoDto;

public interface MapServie {
	// 시도 리스트 가져오기
	public List<SidoDto> getSidoList();
	// 시도에 따른 구군 리스트 가져오기
	public Map<Integer, List<GugunDto>> getGugunList();
	// 관광지 리스트 가져오기 (sido_code, gugun_code, content_type_id, keyword)
	public List<AttractionDto> getAttractionList(int sido_code, int gugun_code, int content_type_id);
	// 관광지 세부사항 가져오기 ()
	public AttractionDto viewAttraction(int content_id) throws Exception;
	// 관광지 수 가져오기 - 메인화면
	public int getTotalAttractionCount() throws Exception;
	// 추천 여행지(랜덤 or 핫플기반) 가져오기 - 메인화면
	public AttractionDto getRecommendationAttraction() throws Exception;
}
