package com.trip.vue.hotplace.controller;

import java.net.URLDecoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trip.vue.hotplace.model.HotplaceDto;
import com.trip.vue.hotplace.model.service.HotplaceService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/hotplace")
@Slf4j
public class HotplaceController {
	
	@Autowired	
    private ObjectMapper objectMapper;
	@Autowired
	private HotplaceService service;
	//get 좋아요순으로 가져오기(이미지, id) - 메인 "/best"
	@GetMapping("/best")
	public ResponseEntity<?> listBestHotplace() throws Exception{
		log.info("listBestHotplace access = {}");
		try {
			return new ResponseEntity<List<HotplaceDto>>(service.listBestHotplace(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//get 핫플 수 가져오기 - 메인화면 "/cnt"
	@GetMapping("/cnt")
	public ResponseEntity<?> getTotalHotplaceCount() throws Exception{
		try {
			return new ResponseEntity<Integer>(service.getTotalHotplaceCount(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//get list 가져오기(최신순) - 피드 ""
	@GetMapping("")
	public ResponseEntity<?> listHotplace() throws Exception{
		try {		
			return new ResponseEntity<List<HotplaceDto>>(service.listHotplace(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//post 글쓰기 ""
	@PostMapping(value="", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
	        produces = {MediaType.APPLICATION_JSON_VALUE} )
	public ResponseEntity<?> insertHotplace(@RequestPart("info") String infoString,
			@RequestParam(name="fileImage", required=false) MultipartFile file) throws Exception{
		infoString = URLDecoder.decode(infoString, "UTF-8");
		HotplaceDto info = objectMapper.readValue(infoString, HotplaceDto.class);
//		log.info("insertHotplace access = {}", info);
		try {
			return new ResponseEntity<Integer>(service.insertHotplace(info, file), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 글수정 ""
	@PutMapping("/{hotplace_id}")
	public ResponseEntity<?> modifyHotplace(@RequestBody HotplaceDto ob) throws Exception{
		log.info("modifyHotplace access = {}", ob);
		try {
			return new ResponseEntity<Integer>(service.modifyHotplace(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete 글 삭제 ""
	@DeleteMapping("/{hotplace_id}")
	public ResponseEntity<?> deleteHotplace(@PathVariable("hotplace_id") int hotplace_id) throws Exception{
		try {
			return new ResponseEntity<Integer>(service.deleteHotplace(hotplace_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//get 글 세부사항 가져오기 "/{id}"
	@GetMapping("/{hotplace_id}")
	public ResponseEntity<?> viewHotplace(@PathVariable("hotplace_id") int hotplace_id) throws Exception{
		log.info("viewHotplace access = {}", hotplace_id);
		try {
			return new ResponseEntity<HotplaceDto>(service.viewHotplace(hotplace_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 글 세부사항 좋아요 올리기 "/like"
	@PutMapping("/like/{hotplace_id}")
	public ResponseEntity<?> updateLike(@PathVariable("hotplace_id") int hotplace_id) throws Exception{
		log.info("updateLike access = {}", hotplace_id);
		try {
			service.updateLike(hotplace_id);
			return new ResponseEntity<String>("좋아요 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
