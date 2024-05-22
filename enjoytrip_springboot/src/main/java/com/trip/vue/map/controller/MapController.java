package com.trip.vue.map.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.map.model.AttractionDto;
import com.trip.vue.map.model.GugunDto;
import com.trip.vue.map.model.SidoDto;
import com.trip.vue.map.model.service.MapService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/attraction")
@Slf4j
public class MapController {
	@Autowired
	private MapService service;
	
	// get 시도 리스트 가져오기 "/sido"
	@GetMapping("/sido")
	public ResponseEntity<?> getSidoList() throws Exception{
		log.info("getSidoList access");
		try {
			return new ResponseEntity<List<SidoDto>>(service.getSidoList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 시도에 따른 구군 리스트 가져오기 "/gugun"
	@GetMapping("/gugun")
	public ResponseEntity<?> getGugunList() throws Exception{
		log.info("getGugunList access");
		try {
			return new ResponseEntity<Map<Integer, List<GugunDto>>>(service.getGugunList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get 관광지 리스트 가져오기 (sido_code, gugun_code, content_type_id, keyword) ""
	@GetMapping("")
	public ResponseEntity<?> getAttractionList(@RequestParam Map<String, Object> map) throws Exception{
		try {
			return new ResponseEntity<List<AttractionDto>>(service.getAttractionList(map), HttpStatus.OK);
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
	@GetMapping("/recommend")
	public ResponseEntity<?> getRecommendationAttraction() throws Exception{
		try {
			return new ResponseEntity<AttractionDto>(service.getRecommendationAttraction(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// 사용자가 찜한 관광지 가져오기
	@GetMapping("/cart/{userid}")
	public ResponseEntity<?> getUserAttractionList(@PathVariable("userid") String userid) throws Exception{
		try {
			return new ResponseEntity<List<AttractionDto>>(service.getUserAttractionList(userid), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// 사용자가 찜한 관광지 추가하기 --
	@PostMapping("/cart")
	public ResponseEntity<?> insertAttraction(@RequestParam Map<String, Object> map) throws Exception{
		try {
			log.info("insertAttraction access = {}", map);
			return new ResponseEntity<Integer>(service.insertAttraction(map), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// 사용자가 찜한 관광지 삭제하기
	@DeleteMapping("/cart")
	public ResponseEntity<?> deleteAttraction(@RequestParam Map<String, Object> map) throws Exception{
		try {
			log.info("deleteAttraction access = {}", map);
			return new ResponseEntity<Integer>(service.deleteAttraction(map), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
