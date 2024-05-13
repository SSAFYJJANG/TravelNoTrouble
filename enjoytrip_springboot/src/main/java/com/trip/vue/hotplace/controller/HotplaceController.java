package com.trip.vue.hotplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.hotplace.model.service.HotplaceServie;

@RestController
@RequestMapping("/hotplace")
public class HotplaceController {
	@Autowired
	private HotplaceServie service;
	//get 좋아요순으로 가져오기(이미지, id) - 메인 "/best"
	//get 핫플 수 가져오기 - 메인화면 "/cnt"
	
	//get list 가져오기(최신순) - 피드 "/"
	//post 글쓰기 "/"
	//put 글수정 "/"
	//delete 글 삭제 "/"
	
	//get 글 세부사항 가져오기 "/{id}"
	//put 글 세부사항 좋아요 올리기 "/like"
}
