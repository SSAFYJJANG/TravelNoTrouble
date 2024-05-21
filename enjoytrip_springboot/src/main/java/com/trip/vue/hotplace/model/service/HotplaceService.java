package com.trip.vue.hotplace.model.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.trip.vue.hotplace.model.HotplaceDto;

public interface HotplaceService {
	//좋아요순으로 가져오기(이미지, id) - 메인
	public List<HotplaceDto> listBestHotplace() throws Exception;
	//list 가져오기(최신순) - 피드
	public List<HotplaceDto> listHotplace() throws Exception;
	//글 쓰기
	public int insertHotplace(HotplaceDto ob, MultipartFile image) throws Exception;
	//글 삭제
	public int deleteHotplace(int hotplace_id) throws Exception;
	//글 수정
	public int modifyHotplace(HotplaceDto ob) throws Exception;
	//글 세부사항 가져오기
	public HotplaceDto viewHotplace(int hotplace_id) throws Exception;
	//종아요 올리기
	public void updateLike(int hotplace_id) throws Exception;
	// 핫플 수 가져오기 - 메인화면
	public int getTotalHotplaceCount() throws Exception;
	// 전체 핫플 삭제
	public int deleteAllHotplace(String userId) throws Exception;
	// 유저 자신의 핫플 가져오기
	public int viewUserHotplace(String userId) throws Exception;
}
