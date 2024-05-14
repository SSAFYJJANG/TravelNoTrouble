package com.trip.vue.hotplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.hotplace.model.HotplaceDto;
import com.trip.vue.hotplace.model.service.HotplaceService;

@RestController
@RequestMapping("/hotplace")
public class HotplaceController {
	@Autowired
	private HotplaceService service;
	//get 좋아요순으로 가져오기(이미지, id) - 메인 "/best"
	@GetMapping("/best")
	public ResponseEntity<?> listBestHotplace() throws Exception{
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
	
	//get list 가져오기(최신순) - 피드 "/"
	@GetMapping("/")
	public ResponseEntity<?> listHotplace() throws Exception{
		try {
			return new ResponseEntity<List<HotplaceDto>>(service.listHotplace(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//post 글쓰기 "/"
	@PostMapping("/")
	public ResponseEntity<?> insertHotplace(@RequestBody HotplaceDto ob) throws Exception{
		try {
			return new ResponseEntity<Integer>(service.insertHotplace(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 글수정 "/"
	@PutMapping("/")
	public ResponseEntity<?> modifyHotplace(@RequestBody HotplaceDto ob) throws Exception{
		try {
			return new ResponseEntity<Integer>(service.modifyHotplace(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete 글 삭제 "/"
	@DeleteMapping("/")
	public ResponseEntity<?> deleteHotplace(@RequestBody int hotplace_id) throws Exception{
		try {
			return new ResponseEntity<Integer>(service.deleteHotplace(hotplace_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//get 글 세부사항 가져오기 "/{id}"
	@GetMapping("/{id}")
	public ResponseEntity<?> viewHotplace(@RequestBody int board_id) throws Exception{
		try {
			return new ResponseEntity<HotplaceDto>(service.viewHotplace(board_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 글 세부사항 좋아요 올리기 "/like"
	@PutMapping("/like")
	public ResponseEntity<?> updateLike(@RequestBody int hotplace_id) throws Exception{
		try {
			service.updateLike(hotplace_id);
			return new ResponseEntity<String>("좋아요 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
