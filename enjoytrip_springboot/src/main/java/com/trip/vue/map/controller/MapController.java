package com.trip.vue.map.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.map.model.AttractionDto;
import com.trip.vue.map.model.GugunDto;
import com.trip.vue.map.model.SidoDto;
import com.trip.vue.map.model.service.MapService;

@RestController
@RequestMapping("/attraction")
public class MapController {
	@Autowired
	private MapService service;
	
	// get 시도 리스트 가져오기 "/sido"
	@GetMapping("/sido")
	public ResponseEntity<?> getSidoList() throws Exception{
		try {
			return new ResponseEntity<List<SidoDto>>(service.getSidoList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 시도에 따른 구군 리스트 가져오기 "/gugun"
	@GetMapping("/gugun")
	public ResponseEntity<?> getGugunList() throws Exception{
		try {
			return new ResponseEntity<Map<Integer, List<GugunDto>>>(service.getGugunList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 관광지 리스트 가져오기 (sido_code, gugun_code, content_type_id, keyword) "/"
	@GetMapping("/")
	public ResponseEntity<?> getAttractionList(@RequestParam("sido_code") int sido_code,
												@RequestParam("gugun_code") int gugun_code, 
												@RequestParam("content_type_id")	int content_type_id) throws Exception{
		try {
			return new ResponseEntity<List<AttractionDto>>(service.getAttractionList(sido_code, gugun_code, content_type_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 관광지 세부사항 가져오기 () "/{id}"
	@GetMapping("/{id}")
	public ResponseEntity<?> viewAttraction(@PathVariable("id") int content_id) throws Exception{
		try {
			return new ResponseEntity<AttractionDto>(service.viewAttraction(content_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 관광지 수 가져오기 - 메인화면 "/cnt"
	@GetMapping("/cnt")
	public ResponseEntity<?> getTotalAttractionCount() throws Exception{
		try {
			return new ResponseEntity<Integer>(service.getTotalAttractionCount(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get추천 여행지(랜덤 or 핫플기반) 가져오기 - 메인화면 "/best"
	@GetMapping("/best")
	public ResponseEntity<?> getRecommendationAttraction() throws Exception{
		try {
			return new ResponseEntity<AttractionDto>(service.getRecommendationAttraction(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// 사용자가 찜한 관광지 가져오기
	@GetMapping("/{userid}")
	public ResponseEntity<?> getUserAttractionList(@PathVariable("userid") String userid) throws Exception{
		try {
			return new ResponseEntity<List<AttractionDto>>(service.getUserAttractionList(userid), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
