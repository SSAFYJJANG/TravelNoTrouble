package com.trip.vue.board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.board.model.BoardDto;
import com.trip.vue.board.model.service.BoardService;
import com.trip.vue.user.controller.UserController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/board")
@Slf4j
public class BoardController {
	@Autowired
	private BoardService service;
	
	//get list 가져오기 ""
	@GetMapping("")
	public ResponseEntity<?> listBoard() throws Exception{
		log.info("listBoard access");
		try {
			return new ResponseEntity<List<BoardDto>>(service.listBoard(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//post 글쓰기 ""
	@PostMapping("")
	public ResponseEntity<?> insertBoard(@RequestBody BoardDto ob) throws Exception{
		log.info("insertBoard access = {}", ob);
		try {
			return new ResponseEntity<Integer>(service.insertBoard(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//put 글수정 ""
	@PutMapping("")
	public ResponseEntity<?> modifyBoard(@RequestBody BoardDto ob) throws Exception{
		log.info("modifyBoard access = {}", ob);
		try {
			return new ResponseEntity<Integer>(service.modifyBoard(ob), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete 글 삭제 ""
	@DeleteMapping("")
	public ResponseEntity<?> deleteBoard(@RequestBody int board_id) throws Exception{
		log.info("deleteBoard access id = {}", board_id);
		try {
			return new ResponseEntity<Integer>(service.deleteBoard(board_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//get 글 세부사항 가져오기 "/{id}"
	@GetMapping("/{id}")
	public ResponseEntity<?> viewBoard(@PathVariable("id") int board_id) throws Exception{
		try {
			return new ResponseEntity<BoardDto>(service.viewBoard(board_id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//TODO 동작 확인 후 url 고민해보기
	//get 글 검색 "/title={title}&id={id}"
	@GetMapping("/{title}&{id}")
	public ResponseEntity<?> searchBoard(@RequestParam Map<String, String> keyword) throws Exception{
		try {
			return new ResponseEntity<List<BoardDto>>(service.searchBoard(keyword), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
